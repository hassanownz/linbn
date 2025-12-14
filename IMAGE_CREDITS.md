# Image Credits

This website uses beautiful, free images from **Unsplash** - all loaded directly from their CDN.

## Images Used

### 1. Serene Mountain
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1506905925346-21bda4d32df4
- **Description**: Majestic mountain landscape at dawn

### 2. Ocean Calm
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1505142468610-359e7d316be0
- **Description**: Tranquil ocean waves

### 3. Forest Meditation
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1441974231531-c6227db76b6e
- **Description**: Peaceful forest path

### 4. Desert Zen
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1509316785289-025f5b846b35
- **Description**: Serene desert sand dunes

### 5. Minimalist Architecture
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d
- **Description**: Clean minimalist architecture

### 6. Sunset Reflection
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1495616811223-4d98c6e9c869
- **Description**: Beautiful sunset over water

### 7. Misty Morning
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05
- **Description**: Misty nature landscape

### 8. Cherry Blossom
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1522383225653-ed111181a951
- **Description**: Delicate cherry blossoms

### 9. Northern Lights
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1483347756197-71ef80e95f73
- **Description**: Aurora borealis night sky

### 10. Lavender Fields
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1499002238440-d264edd596ec
- **Description**: Purple lavender fields

### 11. Starry Night
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1419242902214-272b3f66ee7a
- **Description**: Starlit night sky

### 12. Bamboo Grove
- **Source**: Unsplash
- **URL**: https://images.unsplash.com/photo-1523824921871-d6f1a15151f1
- **Description**: Peaceful bamboo forest

## License Information

All images are from **Unsplash** and are free to use under the [Unsplash License](https://unsplash.com/license):
- ✅ Free to use for commercial and non-commercial purposes
- ✅ No permission needed
- ✅ Attribution appreciated but not required

## Image Optimization

The URLs include optimization parameters:
- `w=1920` - Width optimized for Full HD displays
- `q=80` - Quality at 80% (good balance of quality and file size)
- `fit=crop` - Properly cropped for the viewport

## Customization

Want to use different images? Simply:

1. Find your image on Unsplash or Pexels
2. Copy the image URL
3. Update the `background` property in `js/script.js`
4. Add optimization parameters: `?w=1920&q=80&fit=crop`

Example:
```javascript
{
    id: 13,
    name: 'Your Custom Image',
    background: 'https://images.unsplash.com/photo-XXXXX?w=1920&q=80&fit=crop',
    font: "'Your Font', serif",
    textColor: '#ffffff',
    overlayGradient: 'radial-gradient(...)',
    animation: 'breathe'
}
```

## Benefits of Using CDN Images

✅ **No Downloads** - Images load from Unsplash's fast CDN  
✅ **Always Available** - Reliable global infrastructure  
✅ **Optimized Delivery** - Automatic format selection (WebP when supported)  
✅ **Free Forever** - Unsplash is free for all use cases  
✅ **Easy Updates** - Just change the URL to swap images  

## Alternative: Local Images

If you prefer to host images locally:
1. Download your preferred images
2. Save to `assets/images/` folder
3. Update paths in `js/script.js`:
   ```javascript
   background: 'assets/images/your-image.jpg',
   ```

See `assets/images/IMAGES_GUIDE.md` for detailed instructions.

---

**Thank you to all the amazing photographers on Unsplash who make their work freely available!** 📸🙏

