// ============================================
// QUICK START VERSION WITH GRADIENT BACKGROUNDS
// ============================================
// This version uses beautiful gradients instead of images
// Perfect for testing or if you don't have images yet!
// 
// To use: Rename this file to script.js (backup the original first)
// Or copy the aestheticPresets array to the main script.js
// ============================================

const aestheticPresets = [
    {
        id: 1,
        name: 'Purple Dreams',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        font: "'Cormorant Garamond', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(20, 20, 40, 0.3) 100%)',
        animation: 'breathe'
    },
    {
        id: 2,
        name: 'Pink Sunset',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        font: "'Playfair Display', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(40, 10, 20, 0.3) 100%)',
        animation: 'breathe'
    },
    {
        id: 3,
        name: 'Ocean Blue',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        font: "'Libre Baskerville', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(10, 30, 40, 0.3) 100%)',
        animation: 'breathe'
    },
    {
        id: 4,
        name: 'Forest Green',
        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        font: "'Cinzel', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(20, 40, 30, 0.3) 100%)',
        animation: 'breathe'
    },
    {
        id: 5,
        name: 'Golden Hour',
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        font: "'Lora', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(50, 30, 10, 0.3) 100%)',
        animation: 'pulse'
    },
    {
        id: 6,
        name: 'Deep Ocean',
        background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        font: "'Crimson Text', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(20, 10, 40, 0.3) 100%)',
        animation: 'breathe'
    },
    {
        id: 7,
        name: 'Pastel Dream',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        font: "'EB Garamond', serif",
        textColor: '#5a5a5a',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.2) 100%)',
        animation: 'float'
    },
    {
        id: 8,
        name: 'Soft Rose',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        font: "'Spectral', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(60, 20, 40, 0.2) 100%)',
        animation: 'breathe'
    },
    {
        id: 9,
        name: 'Peach Glow',
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        font: "'Philosopher', sans-serif",
        textColor: '#6a4e42',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(100, 60, 40, 0.2) 100%)',
        animation: 'pulse'
    },
    {
        id: 10,
        name: 'Coral Reef',
        background: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
        font: "'Abril Fatface', cursive",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(30, 30, 50, 0.3) 100%)',
        animation: 'breathe'
    },
    {
        id: 11,
        name: 'Sky Lavender',
        background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        font: "'Cinzel', serif",
        textColor: '#ffffff',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(40, 30, 60, 0.3) 100%)',
        animation: 'pulse'
    },
    {
        id: 12,
        name: 'Warm Amber',
        background: 'linear-gradient(135deg, #f8b500 0%, #fceabb 100%)',
        font: "'Lora', serif",
        textColor: '#5a4a2a',
        overlayGradient: 'radial-gradient(circle at center, transparent 0%, rgba(80, 60, 20, 0.2) 100%)',
        animation: 'breathe'
    }
];

// ============================================
// Ambient Sounds Configuration
// ============================================

const ambientSounds = [
    'assets/sounds/ambient1.mp3',
    'assets/sounds/ambient2.mp3',
    'assets/sounds/ambient3.mp3'
];

// ============================================
// Application State
// ============================================

let currentPreset = null;
let isMusicPlaying = false;
let currentSoundIndex = 0;

// ============================================
// DOM Elements
// ============================================

const elements = {
    backgroundContainer: document.getElementById('backgroundContainer'),
    backgroundOverlay: document.querySelector('.background-overlay'),
    quoteWrapper: document.getElementById('quoteWrapper'),
    mainQuote: document.getElementById('mainQuote'),
    musicToggle: document.getElementById('musicToggle'),
    refreshBtn: document.getElementById('refreshBtn'),
    hint: document.getElementById('hint'),
    ambientAudio: document.getElementById('ambientAudio'),
    loadingScreen: document.getElementById('loadingScreen')
};

// ============================================
// Core Functions
// ============================================

/**
 * Select a random preset different from the current one
 */
function selectRandomPreset() {
    let newPreset;
    do {
        newPreset = aestheticPresets[Math.floor(Math.random() * aestheticPresets.length)];
    } while (currentPreset && newPreset.id === currentPreset.id && aestheticPresets.length > 1);
    
    return newPreset;
}

/**
 * Apply the aesthetic preset to the page
 */
function applyPreset(preset, skipAnimation = false) {
    currentPreset = preset;
    
    // Apply background (gradient or image)
    if (preset.background.startsWith('linear-gradient') || 
        preset.background.startsWith('radial-gradient')) {
        // It's a gradient, apply directly
        elements.backgroundContainer.style.background = preset.background;
        elements.backgroundContainer.style.backgroundImage = 'none';
    } else {
        // It's an image URL
        elements.backgroundContainer.style.backgroundImage = `url('${preset.background}')`;
        elements.backgroundContainer.style.background = '';
    }
    
    // Apply overlay gradient
    elements.backgroundOverlay.style.background = preset.overlayGradient;
    
    // Apply font and text color
    elements.mainQuote.style.fontFamily = preset.font;
    elements.mainQuote.style.color = preset.textColor;
    
    // Remove previous animation classes
    elements.mainQuote.classList.remove('breathe', 'pulse', 'float');
    
    // Add new animation if not skipping
    if (!skipAnimation) {
        // Reset animation by removing and re-adding
        void elements.mainQuote.offsetWidth; // Trigger reflow
        elements.mainQuote.style.animation = 'none';
        
        setTimeout(() => {
            elements.mainQuote.style.animation = '';
        }, 10);
    }
    
    // Store preset ID in localStorage for persistence
    localStorage.setItem('lastPresetId', preset.id);
}

/**
 * Change to a new random aesthetic
 */
function changeAesthetic() {
    // Add refreshing class for animation
    elements.refreshBtn.classList.add('refreshing');
    
    // Fade out current content
    elements.backgroundContainer.style.opacity = '0';
    elements.quoteWrapper.style.opacity = '0';
    
    setTimeout(() => {
        // Select and apply new preset
        const newPreset = selectRandomPreset();
        applyPreset(newPreset);
        
        // Fade back in
        elements.backgroundContainer.style.opacity = '1';
        elements.quoteWrapper.style.opacity = '1';
        
        // Remove refreshing class
        setTimeout(() => {
            elements.refreshBtn.classList.remove('refreshing');
        }, 600);
    }, 400);
}

/**
 * Toggle ambient music
 */
function toggleMusic() {
    if (isMusicPlaying) {
        elements.ambientAudio.pause();
        elements.musicToggle.classList.remove('playing');
        isMusicPlaying = false;
        localStorage.setItem('musicPlaying', 'false');
    } else {
        // Set random sound if not already loaded
        if (!elements.ambientAudio.src || elements.ambientAudio.src.includes('about:blank')) {
            currentSoundIndex = Math.floor(Math.random() * ambientSounds.length);
            elements.ambientAudio.src = ambientSounds[currentSoundIndex];
        }
        
        elements.ambientAudio.play().catch(err => {
            console.log('Audio play failed:', err);
        });
        elements.musicToggle.classList.add('playing');
        isMusicPlaying = true;
        localStorage.setItem('musicPlaying', 'true');
    }
}

/**
 * Load initial preset
 */
function loadInitialPreset() {
    // Try to load last used preset from localStorage
    const lastPresetId = localStorage.getItem('lastPresetId');
    let preset;
    
    if (lastPresetId) {
        preset = aestheticPresets.find(p => p.id === parseInt(lastPresetId));
    }
    
    // If no stored preset or not found, select random
    if (!preset) {
        preset = selectRandomPreset();
    }
    
    applyPreset(preset, true);
}

/**
 * Hide loading screen
 */
function hideLoadingScreen() {
    setTimeout(() => {
        elements.loadingScreen.classList.add('hidden');
    }, 500);
}

/**
 * Hide hint after delay
 */
function autoHideHint() {
    setTimeout(() => {
        elements.hint.style.transition = 'opacity 1s ease';
        elements.hint.style.opacity = '0';
    }, 8000);
}

// ============================================
// Event Listeners
// ============================================

/**
 * Music toggle button
 */
elements.musicToggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMusic();
});

/**
 * Refresh button
 */
elements.refreshBtn.addEventListener('click', (e) => {
    e.preventDefault();
    changeAesthetic();
});

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    // Space bar - Change aesthetic
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        changeAesthetic();
    }
    
    // M key - Toggle music
    if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMusic();
    }
});

/**
 * Handle audio end - loop to next sound
 */
elements.ambientAudio.addEventListener('ended', () => {
    if (isMusicPlaying) {
        currentSoundIndex = (currentSoundIndex + 1) % ambientSounds.length;
        elements.ambientAudio.src = ambientSounds[currentSoundIndex];
        elements.ambientAudio.play();
    }
});

/**
 * Prevent default space bar scrolling
 */
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
    }
});

// ============================================
// Initialization
// ============================================

/**
 * Initialize the application
 */
function init() {
    // Load the initial preset
    loadInitialPreset();
    
    // Hide loading screen
    hideLoadingScreen();
    
    // Auto-hide hint after delay
    autoHideHint();
    
    console.log('🌟 Life is nothing but now - Ready (Gradient Version)');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

