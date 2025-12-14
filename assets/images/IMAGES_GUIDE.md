# Image Assets Guide

This folder should contain 12 aesthetic background images. Each image should be:

## Image Specifications
- **Format**: JPG (for smaller file size) or PNG
- **Dimensions**: Minimum 1920x1080px (Full HD) recommended
- **File Size**: Optimize to 200-500KB each for fast loading
- **Quality**: High quality, aesthetically pleasing, suitable for meditation/mindfulness

## Required Images

Place the following images in this folder:

1. **mountain.jpg** - Serene mountain landscape, preferably with mist or dawn lighting
2. **ocean.jpg** - Calm ocean scene, could be waves, horizon, or underwater
3. **forest.jpg** - Forest path or trees, peaceful and green
4. **desert.jpg** - Desert landscape with sand dunes or rock formations
5. **architecture.jpg** - Minimalist architecture, clean lines, modern or traditional
6. **sunset.jpg** - Beautiful sunset or sunrise over water or landscape
7. **mist.jpg** - Misty morning scene, fog, ethereal atmosphere
8. **blossoms.jpg** - Cherry blossoms or similar beautiful flowers
9. **aurora.jpg** - Northern lights or night sky
10. **lavender.jpg** - Lavender fields or similar purple flowers
11. **stars.jpg** - Starry night sky, Milky Way
12. **bamboo.jpg** - Bamboo grove or forest

## Where to Find Free Images

### Recommended Sources:
- **Unsplash** (unsplash.com) - Free, high-quality images
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free images and videos

### Search Terms:
Use terms like: "minimalist landscape", "serene nature", "peaceful scenery", "zen", "meditation background"

## Image Optimization

Before adding images, optimize them:

1. **Online Tools**:
   - TinyPNG (tinypng.com)
   - Squoosh (squoosh.app)
   - ImageOptim (for Mac)

2. **Command Line** (if you have ImageMagick):
   ```bash
   mogrify -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 *.jpg
   ```

## License Considerations

Make sure all images are:
- Free for commercial use
- No attribution required (or provide attribution in README)
- Properly licensed for web use

---

**Note**: The website will work without images, but the backgrounds won't load. For testing, you can use solid colors or gradients in CSS temporarily.

