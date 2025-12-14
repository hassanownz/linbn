# Interactive Features Guide

## 🌌 Particle Systems

### 12 Unique Presets

Each preset has its own personality:

1. **Cosmic Dust** - Connected particles with diagonal text layout
2. **Nebula Dreams** - Soft, flowing particles with scattered text
3. **Starfield** - Twinkling stars with vertical text
4. **Aurora Flow** - Flowing colors with circular text arrangement
5. **Galaxy Spiral** - Interconnected cosmic particles with wave layout
6. **Firefly Night** - Glowing particles that react strongly to movement
7. **Deep Space** - Dense starfield with connections
8. **Sakura Petals** - Gentle floating particles with scattered layout
9. **Quantum Field** - Fast-moving connected particles
10. **Sunset Particles** - Warm-colored flowing particles
11. **Electric Storm** - Energetic star-shaped particles with zigzag text
12. **Zen Garden** - Slow, meditative particles with vertical text

## 📐 Text Layouts

### 6 Dynamic Layouts

The text "Life is nothing but now" appears differently each time:

- **Diagonal**: Words flow diagonally across the screen
- **Vertical**: Stacked vertically, reading top to bottom
- **Scattered**: Words placed randomly around the screen
- **Circular**: Arranged in a circle
- **Wave**: Following a sine wave pattern
- **Zigzag**: Alternating left and right

### Word Emphasis

- **"Life"** - 30% larger, bold, floating animation
- **"is" & "but"** - 30% opacity, smaller, subtle
- **"nothing"** - 85% opacity, medium size
- **"now"** - 40% LARGER, bold, pulsing animation

## 👋 Hand Tracking

### How It Works

1. Click the camera icon (or press `W`)
2. Allow camera permissions
3. Move your hand in front of the camera
4. Watch particles react to your index finger!

### Features

- Uses MediaPipe Hands for accurate tracking
- Tracks only your index finger tip
- Particles push away from your hand
- Visual indicator shows where your hand is detected
- Privacy-focused: nothing is recorded

### Tips

- Works best in good lighting
- Keep your hand 1-2 feet from camera
- Move slowly for best particle interaction
- Try circular motions to create particle vortexes!

## 🎮 Interaction Modes

### Without Webcam (Default)

- Particles respond to your mouse movement
- Move cursor around to push particles
- Click refresh or press Space for new aesthetic

### With Webcam

- Particles respond to hand gestures
- Much more engaging and immersive
- Great for presentations or art installations

## ⚡ Particle Physics

Each preset has different properties:

- **Particle Count**: 90-350 particles
- **Size**: 1-9 pixels
- **Speed**: Slow (0.2) to Fast (0.8)
- **Shape**: Circles or Stars
- **Connections**: Some presets draw lines between nearby particles
- **Interaction Radius**: 160-250 pixels
- **Interaction Force**: How strongly particles react (0.6-2.0)

## 🎨 Customization Ideas

Want to add your own preset? Edit `js/script.js`:

```javascript
{
    id: 13,
    name: 'Your Preset Name',
    particleCount: 200,              // Number of particles
    colors: ['#ff0000', '#00ff00'],  // Particle colors
    minSize: 2,                       // Minimum particle size
    maxSize: 6,                       // Maximum particle size
    speed: 0.5,                       // Movement speed
    shape: 'circle',                  // 'circle' or 'star'
    connections: true,                // Draw lines between particles
    connectionColor: '#ffffff',       // Line color
    interactionRadius: 200,           // Interaction distance
    interactionForce: 1.0,           // How strong the push
    font: "'Your Font', serif",      // Text font
    textColor: '#ffffff',            // Text color
    layout: 'diagonal'               // Text layout style
}
```

## 🔧 Troubleshooting

### Webcam Not Working?

- Check browser permissions (should show a prompt)
- Make sure you're using HTTPS (required for camera access)
- Try a different browser (Chrome/Edge recommended)
- Ensure no other app is using the webcam

### Slow Performance?

- Try presets with fewer particles
- Disable connections (can be CPU intensive)
- Close other browser tabs
- Use a more powerful device

### Particles Not Responding?

- Make sure JavaScript is enabled
- Check browser console for errors
- Try refreshing the page
- Disable browser extensions

## 💡 Pro Tips

1. **Best Presets for Hand Tracking**:
   - Firefly Night (high interaction force)
   - Sakura Petals (beautiful flowing movement)
   - Nebula Dreams (dreamy effects)

2. **Best for Meditation**:
   - Zen Garden (slow, minimal)
   - Starfield (calming)
   - Deep Space (peaceful)

3. **Best for Energy**:
   - Electric Storm (fast-paced)
   - Quantum Field (chaotic)
   - Aurora Flow (flowing)

4. **Creating Patterns**:
   - Circular hand motions create vortexes
   - Slow movements create trails
   - Fast movements scatter particles

## 🌟 Coming Soon

Ideas for future enhancements:

- [ ] Multiple hand tracking
- [ ] Gesture recognition (peace sign, thumbs up, etc.)
- [ ] Custom color picker
- [ ] Save favorite presets
- [ ] Export as video/GIF
- [ ] VR mode
- [ ] Collaborative mode (multiple users)

---

**Experiment and have fun!** There's no wrong way to interact with it. 🎨✨

