// ============================================
// Interactive Aesthetic Presets (No Images!)
// ============================================

const aestheticPresets = [
    {
        id: 1,
        name: 'Cosmic Dust',
        particleCount: 200,
        colors: ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
        minSize: 1,
        maxSize: 4,
        speed: 0.5,
        shape: 'circle',
        connections: true,
        connectionColor: '#667eea',
        interactionRadius: 250,
        interactionForce: 1.2,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#ffffff'
    },
    {
        id: 2,
        name: 'Nebula Dreams',
        particleCount: 150,
        colors: ['#f093fb', '#f5576c', '#ff9a9e', '#fecfef'],
        minSize: 2,
        maxSize: 8,
        speed: 0.3,
        shape: 'circle',
        connections: false,
        interactionRadius: 250,
        interactionForce: 1.2,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#fff0f5'
    },
    {
        id: 3,
        name: 'Starfield',
        particleCount: 300,
        colors: ['#ffffff', '#e6f4ff', '#fff8dc', '#f0f8ff'],
        minSize: 1,
        maxSize: 3,
        speed: 0.2,
        shape: 'star',
        connections: false,
        interactionRadius: 180,
        interactionForce: 0.6,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#ffffff'
    },
    {
        id: 4,
        name: 'Aurora Flow',
        particleCount: 180,
        colors: ['#4facfe', '#00f2fe', '#43e97b', '#38f9d7'],
        minSize: 2,
        maxSize: 6,
        speed: 0.4,
        shape: 'circle',
        connections: true,
        connectionColor: '#4facfe',
        interactionRadius: 220,
        interactionForce: 1.0,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#e6f4ff'
    },
    {
        id: 5,
        name: 'Galaxy Spiral',
        particleCount: 250,
        colors: ['#e0c3fc', '#8ec5fc', '#667eea', '#764ba2'],
        minSize: 1,
        maxSize: 5,
        speed: 0.6,
        shape: 'circle',
        connections: true,
        connectionColor: '#8ec5fc',
        interactionRadius: 200,
        interactionForce: 0.9,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#e6f4ff'
    },
    {
        id: 6,
        name: 'Firefly Night',
        particleCount: 120,
        colors: ['#fee140', '#fa709a', '#ff9a9e', '#fecfef'],
        minSize: 2,
        maxSize: 6,
        speed: 0.3,
        shape: 'circle',
        connections: false,
        interactionRadius: 180,
        interactionForce: 1.5,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#fff5e6'
    },
    {
        id: 7,
        name: 'Deep Space',
        particleCount: 350,
        colors: ['#30cfd0', '#330867', '#667eea', '#764ba2'],
        minSize: 1,
        maxSize: 3,
        speed: 0.4,
        shape: 'star',
        connections: true,
        connectionColor: '#30cfd0',
        interactionRadius: 160,
        interactionForce: 0.7,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#ffffff'
    },
    {
        id: 8,
        name: 'Sakura Petals',
        particleCount: 100,
        colors: ['#ff9a9e', '#fecfef', '#ffd1d1', '#fff0f5'],
        minSize: 3,
        maxSize: 8,
        speed: 0.2,
        shape: 'circle',
        connections: false,
        interactionRadius: 200,
        interactionForce: 2.0,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#fff0f5'
    },
    {
        id: 9,
        name: 'Quantum Field',
        particleCount: 280,
        colors: ['#43e97b', '#38f9d7', '#4facfe', '#00f2fe'],
        minSize: 1,
        maxSize: 4,
        speed: 0.7,
        shape: 'circle',
        connections: true,
        connectionColor: '#43e97b',
        interactionRadius: 190,
        interactionForce: 0.8,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#f0fff0'
    },
    {
        id: 10,
        name: 'Sunset Particles',
        particleCount: 160,
        colors: ['#f093fb', '#f5576c', '#fa709a', '#fee140'],
        minSize: 2,
        maxSize: 7,
        speed: 0.3,
        shape: 'circle',
        connections: false,
        interactionRadius: 230,
        interactionForce: 1.1,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#fff5e6'
    },
    {
        id: 11,
        name: 'Electric Storm',
        particleCount: 220,
        colors: ['#667eea', '#764ba2', '#e0c3fc', '#8ec5fc'],
        minSize: 1,
        maxSize: 5,
        speed: 0.8,
        shape: 'star',
        connections: true,
        connectionColor: '#667eea',
        interactionRadius: 210,
        interactionForce: 0.9,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#ffffff'
    },
    {
        id: 12,
        name: 'Zen Garden',
        particleCount: 90,
        colors: ['#43e97b', '#38f9d7', '#a8edea', '#fed6e3'],
        minSize: 3,
        maxSize: 9,
        speed: 0.2,
        shape: 'circle',
        connections: false,
        interactionRadius: 180,
        interactionForce: 1.8,
        font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
        textColor: '#f0fff0'
    }
];

// ============================================
// Application State
// ============================================

let currentPreset = null;
let particleSystem = null;
let isMusicPlaying = false;
let isWebcamActive = false;
let hands = null;
let camera = null;
let lastPinchDistance = null;
let isPinching = false;
let baseZoom = 1.0;
let snapState = 'waiting'; // 'waiting', 'detecting', 'triggered'
let lastSnapTime = 0;
let snapCooldown = 1000; // 1 second cooldown between snaps
let youtubePlayer = null;
let isYouTubeReady = false;

// ============================================
// DOM Elements
// ============================================

const elements = {
    canvas: document.getElementById('particleCanvas'),
    backgroundOverlay: document.querySelector('.background-overlay'),
    quoteWrapper: document.getElementById('quoteWrapper'),
    mainQuote: document.getElementById('mainQuote'),
    webcamToggle: document.getElementById('webcamToggle'),
    musicToggle: document.getElementById('musicToggle'),
    refreshBtn: document.getElementById('refreshBtn'),
    hint: document.getElementById('hint'),
    ambientAudio: document.getElementById('ambientAudio'),
    loadingScreen: document.getElementById('loadingScreen'),
    webcam: document.getElementById('webcam')
};

// ============================================
// Core Functions
// ============================================

function selectRandomPreset() {
    let newPreset;
    do {
        newPreset = aestheticPresets[Math.floor(Math.random() * aestheticPresets.length)];
    } while (currentPreset && newPreset.id === currentPreset.id && aestheticPresets.length > 1);
    return newPreset;
}

function applyPreset(preset) {
    currentPreset = preset;
    
    // Apply to particle system
    if (particleSystem) {
        particleSystem.setPreset(preset);
    }
    
    // Apply overlay gradient
    elements.backgroundOverlay.style.background = 
        `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)`;
    
    // Apply text color (font is now globally Apple fonts)
    elements.mainQuote.style.color = preset.textColor;
    
    // Store preset ID
    localStorage.setItem('lastPresetId', preset.id);
}

function changeAesthetic() {
    elements.refreshBtn.classList.add('refreshing');
    
    // Fade out
    elements.quoteWrapper.style.opacity = '0';
    
    setTimeout(() => {
        const newPreset = selectRandomPreset();
        applyPreset(newPreset);
        
        // Fade back in
        elements.quoteWrapper.style.opacity = '1';
        
        setTimeout(() => {
            elements.refreshBtn.classList.remove('refreshing');
        }, 600);
    }, 400);
}

async function toggleWebcam() {
    if (isWebcamActive) {
        // Stop webcam
        if (camera) {
            camera.stop();
        }
        if (particleSystem) {
            particleSystem.clearHandPosition();
        }
        elements.webcamToggle.classList.remove('active');
        isWebcamActive = false;
    } else {
        // Start webcam
        try {
            await startHandTracking();
            elements.webcamToggle.classList.add('active');
            isWebcamActive = true;
        } catch (err) {
            console.error('Failed to start webcam:', err);
            alert('Could not access webcam. Please allow camera permissions.');
        }
    }
}

async function startHandTracking() {
    // Initialize MediaPipe Hands
    hands = new Hands({
        locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }
    });
    
    hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });
    
    hands.onResults(onHandResults);
    
    // Start camera
    camera = new Camera(elements.webcam, {
        onFrame: async () => {
            await hands.send({ image: elements.webcam });
        },
        width: 640,
        height: 480
    });
    
    await camera.start();
}

function onHandResults(results) {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0];
        
        // Get key landmarks
        const indexTip = landmarks[8];      // Index finger tip
        const thumbTip = landmarks[4];      // Thumb tip
        const middleTip = landmarks[12];    // Middle finger tip
        
        if (particleSystem) {
            // Flip X axis so hand movement matches cursor (mirror fix)
            particleSystem.updateHandPosition(1 - indexTip.x, indexTip.y);
        }
        
        // PINCH GESTURE for zoom (thumb + index finger)
        const pinchDistance = calculateDistance(thumbTip, indexTip);
        
        // Only zoom when actively gesturing (distance changing)
        if (pinchDistance < 0.25) { // Tracking gesture
            isPinching = true;
            if (lastPinchDistance !== null) {
                // Normalize distance: typical range is 0.02 (very close) to 0.25 (far)
                const minDist = 0.02;
                const maxDist = 0.25;
                const normalizedDist = Math.max(0, Math.min(1, (pinchDistance - minDist) / (maxDist - minDist)));
                
                // Map normalized distance to zoom:
                // Fingers CLOSE (normalizedDist = 0) → zoom OUT (0.7x)
                // Fingers APART (normalizedDist = 1) → zoom IN (2.0x)
                const minZoom = 0.7;  // Reduced range for less sensitivity
                const maxZoom = 2.0;   // Reduced from 3.0
                const zoomValue = minZoom + (normalizedDist * (maxZoom - minZoom));
                
                if (particleSystem) {
                    particleSystem.setZoom(zoomValue);
                }
            }
            lastPinchDistance = pinchDistance;
        } else {
            // Not gesturing
            if (isPinching) {
                // Just released gesture
                isPinching = false;
                if (particleSystem) {
                    baseZoom = particleSystem.targetZoom;
                }
            }
            lastPinchDistance = null;
        }
        
        // SNAP GESTURE detection (thumb + middle finger) - DEBOUNCED
        const snapDistance = calculateDistance(thumbTip, middleTip);
        const currentTime = Date.now();
        
        // State machine for snap detection
        if (snapState === 'waiting') {
            // Fingers must be apart to start
            if (snapDistance > 0.1) {
                snapState = 'detecting';
            }
        } else if (snapState === 'detecting') {
            // Detect snap when fingers come together
            if (snapDistance < 0.05 && (currentTime - lastSnapTime) > snapCooldown) {
                // SNAP! Trigger change
                changeAesthetic();
                lastSnapTime = currentTime;
                snapState = 'triggered';
                console.log('👆 Snap detected!');
            }
        } else if (snapState === 'triggered') {
            // Wait for fingers to separate before allowing next snap
            if (snapDistance > 0.1) {
                snapState = 'waiting';
            }
        }
        
    } else {
        if (particleSystem) {
            particleSystem.clearHandPosition();
        }
        lastPinchDistance = null;
        isPinching = false;
        snapState = 'waiting';
    }
}

function calculateDistance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    const dz = point1.z - point2.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function toggleMusic() {
    if (isMusicPlaying) {
        // Pause music
        if (youtubePlayer && isYouTubeReady) {
            youtubePlayer.pauseVideo();
        }
        elements.musicToggle.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        // Play music
        if (youtubePlayer && isYouTubeReady) {
            youtubePlayer.playVideo();
        } else {
            console.log('YouTube player not ready yet');
        }
        elements.musicToggle.classList.add('playing');
        isMusicPlaying = true;
    }
}

function loadInitialPreset() {
    const lastPresetId = localStorage.getItem('lastPresetId');
    let preset = lastPresetId ? aestheticPresets.find(p => p.id === parseInt(lastPresetId)) : null;
    if (!preset) preset = selectRandomPreset();
    applyPreset(preset);
}

function hideLoadingScreen() {
    setTimeout(() => {
        elements.loadingScreen.classList.add('hidden');
    }, 500);
}

function autoHideHint() {
    setTimeout(() => {
        elements.hint.style.transition = 'opacity 1s ease';
        elements.hint.style.opacity = '0';
    }, 10000);
}

// ============================================
// Event Listeners
// ============================================

elements.webcamToggle.addEventListener('click', toggleWebcam);
elements.musicToggle.addEventListener('click', toggleMusic);
elements.refreshBtn.addEventListener('click', changeAesthetic);

// Mouse tracking for particle interaction
elements.canvas.addEventListener('mousemove', (e) => {
    if (particleSystem && !isWebcamActive) {
        particleSystem.mouseX = e.clientX;
        particleSystem.mouseY = e.clientY;
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        changeAesthetic();
    }
    if (e.code === 'KeyM') {
        e.preventDefault();
        toggleMusic();
    }
    if (e.code === 'KeyW') {
        e.preventDefault();
        toggleWebcam();
    }
    // Zoom controls
    if (e.code === 'Equal' || e.code === 'NumpadAdd') {
        e.preventDefault();
        if (particleSystem) particleSystem.adjustZoom(0.2);
    }
    if (e.code === 'Minus' || e.code === 'NumpadSubtract') {
        e.preventDefault();
        if (particleSystem) particleSystem.adjustZoom(-0.2);
    }
    if (e.code === 'Digit0' || e.code === 'Numpad0') {
        e.preventDefault();
        if (particleSystem) particleSystem.setZoom(1.0);
    }
});

// Prevent space bar scrolling
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
    }
});

// Mouse wheel for zoom
elements.canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (particleSystem) {
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        particleSystem.adjustZoom(delta);
    }
}, { passive: false });

// ============================================
// YouTube Player Setup
// ============================================

// This function is called by YouTube IFrame API when ready
window.onYouTubeIframeAPIReady = function() {
    console.log('YouTube IFrame API loaded');
    youtubePlayer = new YT.Player('youtubePlayer', {
        height: '0',
        width: '0',
        videoId: 'u7K72X4eo_s', // The video ID from the URL
        playerVars: {
            autoplay: 0,  // No autoplay
            loop: 1,
            playlist: 'u7K72X4eo_s', // Required for looping
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            rel: 0
        },
        events: {
            onReady: function(event) {
                isYouTubeReady = true;
                // Set volume (don't autoplay)
                event.target.setVolume(30);
                console.log('🎵 YouTube player ready - Press M to play music');
            },
            onStateChange: function(event) {
                // Ensure loop works
                if (event.data === YT.PlayerState.ENDED) {
                    youtubePlayer.playVideo();
                }
            },
            onError: function(event) {
                console.error('YouTube player error:', event.data);
                console.log('Error codes: 2=Invalid ID, 5=HTML5 error, 100=Video not found, 101/150=Embedding disabled');
                alert('YouTube video cannot be played. The video may have embedding disabled or be unavailable.');
            }
        }
    });
};

// ============================================
// Initialization
// ============================================

function init() {
    // Initialize particle system
    particleSystem = new ParticleSystem(elements.canvas);
    
    // Load initial preset
    loadInitialPreset();
    
    // Start particle animation
    particleSystem.animate();
    
    // Hide loading screen
    hideLoadingScreen();
    
    // Auto-hide hint
    autoHideHint();
    
    console.log('🌟 Life is nothing but now - Interactive Mode Ready!');
    console.log('💡 Press W to enable hand tracking, M for music');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
