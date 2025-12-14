# Quick Start Guide

Get "Life is Nothing But Now" running in under 5 minutes! ⚡

## Step 1: Get the Code ✅

You already have the code! Great.

## Step 2: You're Already Set! ✨

**The website now includes curated images from Unsplash!** They load directly from Unsplash's CDN, so everything works out of the box.

### Alternative Options (Optional):

### Option A: Use Gradient Backgrounds Instead

1. Open `js/script.js`
2. Replace the image paths with gradients:

```javascript
// Change this:
background: 'assets/images/mountain.jpg',

// To this:
background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
```

**Sample gradient presets** (copy-paste ready):
```javascript
// Purple gradient
background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

// Pink sunset
background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',

// Ocean blue
background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',

// Forest green
background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',

// Golden hour
background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
```

### Option B: Use Your Own Local Images

1. Download 12 free images from:
   - [Unsplash](https://unsplash.com)
   - [Pexels](https://pexels.com)

2. Optimize and save to `assets/images/` as:
   - `mountain.jpg`, `ocean.jpg`, `forest.jpg`, etc.

3. Update `js/script.js` to use local paths:
   ```javascript
   background: 'assets/images/mountain.jpg',
   ```
   instead of the Unsplash URLs

## Step 3: Run Locally 🚀

Pick your favorite method:

### Python (Easy)
```bash
cd linbn
python3 -m http.server 8000
```

### Node.js
```bash
cd linbn
npx http-server -p 8000
```

### PHP
```bash
cd linbn
php -S localhost:8000
```

### VS Code
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

Then open: **http://localhost:8000**

## Step 4: Test It 🎉

Try these:
- ✅ Page loads with the quote
- ✅ Press `Space` to change aesthetic
- ✅ Press `M` to toggle music (if you added sounds)
- ✅ Click refresh button
- ✅ Test on mobile

## Optional: Add Ambient Sounds 🎵

1. Download 3 calming tracks:
   - [Freesound](https://freesound.org) - Search "ambient music"
   - [YouTube Audio Library](https://studio.youtube.com)

2. Convert to MP3 (if needed):
   ```bash
   ffmpeg -i input.wav -b:a 128k ambient1.mp3
   ```

3. Rename to:
   - `ambient1.mp3`, `ambient2.mp3`, `ambient3.mp3`

4. Save to `assets/sounds/`

## Deploy (5 minutes) 🌐

### Fastest: Netlify Drop
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `linbn` folder
3. Done! You get a live URL instantly

### GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/linbn.git
git push -u origin main
```

Then enable Pages in repo Settings → Pages

## Common Issues 🔧

### "No images showing"
- Use gradient backgrounds (Option A above)
- Or add actual images to `assets/images/`

### "Music not working"
- Audio files must be in `assets/sounds/`
- You must click the music button (browsers don't allow autoplay)
- Need HTTPS in production (Netlify/Vercel provide this)

### "Slow loading"
- Optimize images to < 500KB each
- Use TinyPNG or Squoosh

## Tips for Best Experience 💡

1. **Mobile**: Test on your phone - it's beautiful on mobile!
2. **Images**: Use serene, minimalist photos for best effect
3. **Colors**: Light text on darker backgrounds works best
4. **Audio**: Keep ambient sounds subtle and calming
5. **Share**: Send the link to friends who need a mindful moment

## Next Steps

- ✅ Customize the quote (edit `index.html`)
- ✅ Add more presets (edit `js/script.js`)
- ✅ Change fonts (edit Google Fonts in `index.html`)
- ✅ Adjust animations (edit `css/styles.css`)
- ✅ Share with others who need this reminder

## Resources

- 📖 Full documentation: [README.md](README.md)
- 🚀 Deployment guide: [DEPLOY.md](DEPLOY.md)
- 🖼️ Image guide: [assets/images/IMAGES_GUIDE.md](assets/images/IMAGES_GUIDE.md)
- 🎵 Sound guide: [assets/sounds/SOUNDS_GUIDE.md](assets/sounds/SOUNDS_GUIDE.md)

---

**That's it!** You're ready to be reminded that life is nothing but now. 🌟

*Remember: The simplest solution is to use gradient backgrounds (Option A) and skip the sounds. The experience is still beautiful!*

