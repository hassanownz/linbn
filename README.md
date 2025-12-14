# Life is Nothing But Now 🌟

> A minimalist, aesthetic website that gently reminds you to stay present and live in the moment.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-ready-green.svg)

## Overview

**"Life is nothing but now"** - A beautiful, meditative web experience that displays this powerful quote with rotating aesthetic backgrounds, typography, and subtle animations. Each visit presents a fresh visual experience designed to inspire mindfulness and presence.

## Features

✨ **12 Interactive Particle Presets**
- Cosmic dust, nebulas, starfields, auroras, and more!
- Each preset has unique colors, behaviors, and physics
- Particles react to your hand movements via webcam
- No images needed - pure interactive canvas magic

🎨 **Dynamic Text Layouts**
- 6 different layout styles: diagonal, vertical, scattered, circular, wave, zigzag
- Text breaks free from monotonous single-line layouts
- "Life" and "now" emphasized with larger sizes and animations
- Each refresh gives you a completely different visual experience

👋 **Hand Gesture Control (Optional)**
- Enable webcam to control particles with hand gestures
- Move your hand and watch particles respond!
- Uses MediaPipe for accurate hand tracking
- Privacy-focused: nothing is recorded or saved

🎵 **Optional Ambient Music**
- Toggle calming background music
- Seamlessly loops between ambient tracks
- State persists across sessions

⌨️ **Keyboard Shortcuts**
- `Space` - Change to new random aesthetic
- `W` - Toggle hand tracking on/off
- `M` - Toggle ambient music on/off

📱 **Fully Responsive**
- Mobile-first design
- Touch-optimized controls
- Works beautifully on desktop, tablet, and phone

📊 **Analytics Ready**
- Google Analytics 4 integration
- Tracks user interactions (hand tracking, music, aesthetic changes)
- Privacy-friendly configuration
- Easy to enable/disable

♿ **Accessible**
- Respects `prefers-reduced-motion` settings
- Keyboard navigation
- No reliance on external images

## Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/linbn.git
cd linbn
```

### 2. No Setup Required! ✨

The website uses **interactive particle systems** - no images needed!
Everything works out of the box.

#### Sounds (Optional)
Add 3 ambient sound files to `assets/sounds/`:
- ambient1.mp3
- ambient2.mp3
- ambient3.mp3

See `assets/sounds/SOUNDS_GUIDE.md` for detailed specifications and recommendations.

### 3. Configure Analytics (Optional)

To enable Google Analytics:

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `js/analytics.js` and replace `'G-XXXXXXXXXX'` with your Measurement ID:
   ```javascript
   const ANALYTICS_CONFIG = {
       measurementId: 'G-XXXXXXXXXX', // Your GA4 Measurement ID
       enabled: true,
       debug: false
   };
   ```

The analytics will track:
- Page views
- Hand tracking toggles
- Music toggles
- Aesthetic changes (which presets are selected)
- User engagement (time on page)
- Zoom interactions
- Snap gestures

To disable analytics, set `enabled: false` in the config.

### 4. Serve the Website

You can use any static file server. Here are a few options:

**Python 3:**
```bash
python3 -m http.server 8000
```

**Node.js (with http-server):**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

## Deployment

This is a static website that can be deployed to any hosting platform:

### Netlify
1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo for automatic deployments

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select branch and root directory
4. Your site will be live at `https://username.github.io/linbn`

### Cloudflare Pages
1. Connect your GitHub repository
2. Build settings: None needed (static site)
3. Deploy

## File Structure

```
linbn/
├── index.html              # Main HTML structure
├── css/
│   └── styles.css         # All styles and animations
├── js/
│   ├── script.js          # Aesthetic rotation and interactions
│   ├── particles.js       # Particle system implementation
│   └── analytics.js       # Analytics tracking (Google Analytics 4)
├── assets/
│   ├── images/            # Background images (add your own)
│   │   ├── IMAGES_GUIDE.md
│   │   └── .gitkeep
│   └── sounds/            # Ambient sounds (add your own)
│       ├── SOUNDS_GUIDE.md
│       └── .gitkeep
├── .gitignore
└── README.md
```

## Customization

### Change the Quote

Edit the quote in `index.html`:
```html
<h1 class="quote" id="mainQuote">Your New Quote Here</h1>
```

### Add More Presets

Edit `js/script.js` and add to the `aestheticPresets` array:
```javascript
{
    id: 13,
    name: 'Your Preset Name',
    background: 'assets/images/yourimage.jpg',
    font: "'Your Font', serif",
    textColor: '#ffffff',
    overlayGradient: 'radial-gradient(...)',
    animation: 'breathe'
}
```

### Modify Animations

Available animation types in `css/styles.css`:
- `breathe` - Gentle scale pulsing
- `pulse` - Opacity pulsing
- `float` - Vertical floating motion

### Change Timing

In `css/styles.css`, modify:
```css
:root {
    --transition-speed: 1000ms;  /* Fade transition duration */
    --transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loads non-critical images
- Optimized animations with CSS transforms
- Respects reduced motion preferences
- Minimal JavaScript footprint
- Fast initial page load

## Finding Free Assets

### Images
- [Unsplash](https://unsplash.com) - Beautiful free images
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

Search terms: "minimalist landscape", "serene nature", "zen", "meditation background"

### Sounds
- [Freesound](https://freesound.org) - Free sound effects
- [YouTube Audio Library](https://studio.youtube.com) - Free music
- [Free Music Archive](https://freemusicarchive.org) - Free music

## Optimization Tips

### Images
```bash
# Resize and optimize with ImageMagick
mogrify -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 *.jpg
```

Or use online tools:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)

### Audio
```bash
# Convert and optimize with FFmpeg
ffmpeg -i input.wav -b:a 128k -ar 44100 output.mp3
```

## Technical Details

**Built With:**
- Pure HTML5, CSS3, and Vanilla JavaScript
- No frameworks or dependencies
- Google Fonts for typography
- CSS Grid and Flexbox for layout
- CSS Custom Properties for theming
- LocalStorage for state persistence

**Features:**
- Keyboard event handling
- Audio API integration
- Smooth CSS transitions
- Responsive design patterns
- Accessibility features

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

- Inspired by mindfulness and the philosophy of living in the present moment
- Built with love and intention

## Contributing

Feel free to submit issues or pull requests for:
- Bug fixes
- New aesthetic presets
- Performance improvements
- Accessibility enhancements

## Support

If this project inspires you to be more present, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Sharing with others

---

**Remember:** Life is nothing but now. 🌟

*Stay present. Stay mindful. Stay here.*

