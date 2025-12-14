// ============================================
// Analytics Helper Module
// ============================================

/**
 * Analytics configuration
 * Replace 'G-XXXXXXXXXX' with your Google Analytics 4 Measurement ID
 * Get your ID from: https://analytics.google.com/
 */
const ANALYTICS_CONFIG = {
    measurementId: 'G-KE7TXBZEYM', // Replace with your GA4 Measurement ID
    enabled: true, // Set to false to disable analytics
    debug: false // Set to true for development debugging
};

// Initialize Google Analytics 4
function initAnalytics() {
    if (!ANALYTICS_CONFIG.enabled || !ANALYTICS_CONFIG.measurementId || ANALYTICS_CONFIG.measurementId === 'G-XXXXXXXXXX') {
        if (ANALYTICS_CONFIG.debug) {
            console.log('📊 Analytics disabled or not configured');
        }
        return;
    }

    // Load gtag.js
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.measurementId, {
        page_path: window.location.pathname,
        anonymize_ip: true, // Privacy-friendly
        allow_google_signals: false, // Disable advertising features
        allow_ad_personalization_signals: false
    });

    if (ANALYTICS_CONFIG.debug) {
        console.log('📊 Analytics initialized:', ANALYTICS_CONFIG.measurementId);
    }
}

// Track page view
function trackPageView() {
    if (!window.gtag || !ANALYTICS_CONFIG.enabled) return;
    
    window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title
    });
    
    if (ANALYTICS_CONFIG.debug) {
        console.log('📊 Page view tracked');
    }
}

// Track custom event
function trackEvent(eventName, eventParams = {}) {
    if (!window.gtag || !ANALYTICS_CONFIG.enabled) return;
    
    window.gtag('event', eventName, eventParams);
    
    if (ANALYTICS_CONFIG.debug) {
        console.log('📊 Event tracked:', eventName, eventParams);
    }
}

// Track hand tracking toggle
function trackHandTracking(enabled) {
    trackEvent('hand_tracking_toggle', {
        enabled: enabled,
        value: enabled ? 1 : 0
    });
}

// Track music toggle
function trackMusicToggle(playing) {
    trackEvent('music_toggle', {
        playing: playing,
        value: playing ? 1 : 0
    });
}

// Track aesthetic change
function trackAestheticChange(presetId, presetName, triggerMethod = 'button') {
    trackEvent('aesthetic_change', {
        preset_id: presetId,
        preset_name: presetName,
        trigger_method: triggerMethod, // 'button', 'keyboard', 'snap', 'touch'
        value: 1
    });
}

// Track preset selection (initial load)
function trackPresetSelected(presetId, presetName) {
    trackEvent('preset_selected', {
        preset_id: presetId,
        preset_name: presetName,
        is_initial: true
    });
}

// Track user engagement (time on page)
let engagementStartTime = Date.now();
let engagementTimer = null;

function startEngagementTracking() {
    engagementStartTime = Date.now();
    
    // Track engagement every 30 seconds
    engagementTimer = setInterval(() => {
        const timeOnPage = Math.floor((Date.now() - engagementStartTime) / 1000);
        
        // Track milestones: 30s, 1min, 2min, 5min
        if (timeOnPage === 30 || timeOnPage === 60 || timeOnPage === 120 || timeOnPage === 300) {
            trackEvent('engagement_milestone', {
                time_seconds: timeOnPage,
                milestone: timeOnPage < 60 ? `${timeOnPage}s` : `${Math.floor(timeOnPage / 60)}min`
            });
        }
    }, 1000);
}

function stopEngagementTracking() {
    if (engagementTimer) {
        clearInterval(engagementTimer);
        engagementTimer = null;
    }
    
    // Track total time on page when leaving
    const totalTime = Math.floor((Date.now() - engagementStartTime) / 1000);
    if (totalTime > 10) { // Only track if user spent meaningful time
        trackEvent('session_end', {
            time_seconds: totalTime
        });
    }
}

// Track zoom interactions
function trackZoom(zoomLevel, method = 'unknown') {
    trackEvent('zoom_interaction', {
        zoom_level: zoomLevel.toFixed(2),
        method: method, // 'mouse_wheel', 'keyboard', 'pinch', 'touch'
        value: zoomLevel
    });
}

// Track snap gesture
function trackSnapGesture() {
    trackEvent('snap_gesture', {
        value: 1
    });
}

// Initialize analytics when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initAnalytics();
        trackPageView();
        startEngagementTracking();
    });
} else {
    initAnalytics();
    trackPageView();
    startEngagementTracking();
}

// Track when user leaves the page
window.addEventListener('beforeunload', stopEngagementTracking);

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        trackEvent,
        trackHandTracking,
        trackMusicToggle,
        trackAestheticChange,
        trackPresetSelected,
        trackZoom,
        trackSnapGesture
    };
}
