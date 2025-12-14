# Deployment Guide

This document provides detailed instructions for deploying "Life is Nothing But Now" to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:
1. ✅ Added background images to `assets/images/` (see IMAGES_GUIDE.md)
2. ✅ Added ambient sounds to `assets/sounds/` (optional, see SOUNDS_GUIDE.md)
3. ✅ Tested locally that everything works
4. ✅ Optimized images and audio files for web

## Quick Deploy Options

### Option 1: Netlify (Easiest)

**Method A: Drag & Drop**
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `linbn` folder
3. Done! Your site is live instantly

**Method B: GitHub Integration**
1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings: Leave empty (static site)
6. Click "Deploy site"

**Custom Domain:**
- Go to Site settings → Domain management
- Add your custom domain
- Update DNS settings as instructed

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd linbn
   vercel
   ```

3. Follow the prompts
4. Your site will be live at `yourproject.vercel.app`

**Custom Domain:**
```bash
vercel --prod
vercel domains add yourdomain.com
```

### Option 3: GitHub Pages

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/linbn.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: `main` / root
   - Click Save

3. Your site will be live at:
   `https://username.github.io/linbn`

### Option 4: Cloudflare Pages

1. Push code to GitHub
2. Log in to [Cloudflare](https://pages.cloudflare.com)
3. Click "Create a project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
6. Click "Save and Deploy"

### Option 5: Traditional Web Hosting

If you have traditional web hosting (cPanel, FTP, etc.):

1. **Via FTP:**
   - Connect to your hosting via FTP client (FileZilla, Cyberduck)
   - Upload all files to `public_html` or `www` directory
   - Ensure file permissions are correct (644 for files, 755 for folders)

2. **Via cPanel File Manager:**
   - Log in to cPanel
   - Open File Manager
   - Navigate to `public_html`
   - Upload all files
   - Extract if uploaded as ZIP

3. **Access your site:**
   - `https://yourdomain.com`

## Environment-Specific Notes

### HTTPS Requirement
Modern browsers require HTTPS for certain features (like audio autoplay). All recommended platforms provide free SSL/HTTPS automatically.

### CORS Issues
If hosting images/sounds on a CDN:
```html
<!-- Add crossorigin attribute -->
<img src="https://cdn.example.com/image.jpg" crossorigin="anonymous">
```

### Asset Optimization

Before deploying, optimize your assets:

**Images:**
```bash
# Using ImageMagick
mogrify -resize 1920x1080^ -gravity center -extent 1920x1080 -quality 85 assets/images/*.jpg

# Or use online tools:
# - tinypng.com
# - squoosh.app
```

**Audio:**
```bash
# Using FFmpeg
ffmpeg -i input.wav -b:a 128k -ar 44100 assets/sounds/ambient1.mp3
```

## Performance Tips

### 1. Enable Caching

**For Netlify (_headers file):**
```
/assets/*
  Cache-Control: public, max-age=31536000
```

**For Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**For Apache (.htaccess):**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType audio/mpeg "access plus 1 year"
</IfModule>
```

### 2. Enable Compression

Most modern platforms enable this automatically. For Apache:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

### 3. Use a CDN

For large assets, consider using a CDN:
- **Cloudflare** - Free CDN with caching
- **AWS CloudFront** - Scalable CDN
- **BunnyCDN** - Affordable CDN

## Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: yousite.netlify.app
   ```

### Vercel
1. Run: `vercel domains add yourdomain.com`
2. Configure DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Cloudflare Pages
1. Add custom domain in project settings
2. DNS is handled automatically if using Cloudflare DNS

## Monitoring & Analytics

### Add Google Analytics (Optional)

Add before `</head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Simple Analytics (Privacy-friendly)

```html
<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
<noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
```

## Testing Before Deploy

### Local Testing
```bash
# Python
python3 -m http.server 8000

# Node.js
npx http-server -p 8000

# PHP
php -S localhost:8000
```

### Check These:
- ✅ All images load correctly
- ✅ Audio files play when toggled
- ✅ Keyboard shortcuts work (Space, M)
- ✅ Responsive on mobile devices
- ✅ No console errors
- ✅ Smooth transitions between presets

## Troubleshooting

### Images Not Loading
- Check file paths are correct
- Ensure image files are uploaded
- Check file permissions (should be readable)
- Verify file extensions match (jpg vs jpeg)

### Audio Not Playing
- HTTPS is required for audio autoplay
- User must interact first (browser policy)
- Check audio file format (MP3 recommended)
- Check file size isn't too large

### Slow Loading
- Optimize images (should be < 500KB each)
- Use WebP format for better compression
- Enable caching headers
- Consider lazy loading

## Security Considerations

### Content Security Policy (Optional)

Add to `<head>`:
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data:;
  media-src 'self';
  script-src 'self';
">
```

## Post-Deploy Checklist

- ✅ Visit the live site and test all features
- ✅ Test on mobile device
- ✅ Check page load speed (should be < 3 seconds)
- ✅ Verify HTTPS is working
- ✅ Test keyboard shortcuts
- ✅ Verify audio toggle works
- ✅ Check console for errors
- ✅ Test on different browsers

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify all files are uploaded correctly
3. Test locally first
4. Check hosting platform documentation
5. Review troubleshooting section above

---

**Ready to deploy?** Choose your platform above and follow the steps. Most deployments take less than 5 minutes! 🚀

