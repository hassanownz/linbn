# Ambient Sounds Guide

This folder should contain 3 ambient sound loops for the optional music feature.

## Sound Specifications
- **Format**: MP3 (best browser compatibility)
- **Duration**: 2-5 minutes each (will loop seamlessly)
- **File Size**: Optimize to 1-3MB each
- **Bitrate**: 128kbps is sufficient for ambient music
- **Type**: Calm, meditative, non-intrusive ambient sounds

## Required Sound Files

Place the following audio files in this folder:

1. **ambient1.mp3** - Nature sounds (rain, ocean waves, forest)
2. **ambient2.mp3** - Meditation music (soft instrumental, singing bowls)
3. **ambient3.mp3** - Atmospheric soundscape (drone, pad sounds)

## Sound Characteristics

Good ambient sounds should:
- Loop seamlessly without jarring transitions
- Be calming and not distracting
- Have minimal melody (more atmospheric)
- No sudden loud sounds or changes
- Consistent volume throughout

## Where to Find Free Ambient Sounds

### Recommended Sources:

1. **Freesound** (freesound.org)
   - Search: "ambient loop", "meditation music", "nature sounds"
   - Filter by Creative Commons licenses

2. **YouTube Audio Library** (studio.youtube.com)
   - Free music and sound effects
   - Can be used commercially

3. **Free Music Archive** (freemusicarchive.org)
   - Filter by ambient/meditation genres

4. **Pixabay** (pixabay.com/music)
   - Free music and sound effects

5. **Incompetech** (incompetech.com)
   - By Kevin MacLeod, various ambient tracks

### Specific Recommendations:
- "Rain and Thunder" sounds
- "Ocean Waves" loops
- "Tibetan Singing Bowls"
- "Piano Ambient" tracks
- "Nature Soundscape" recordings

## Audio Optimization

Convert and optimize your audio files:

### Using FFmpeg:
```bash
# Convert to MP3 with 128kbps bitrate
ffmpeg -i input.wav -b:a 128k -ar 44100 ambient1.mp3

# Create a seamless loop (fade in/out)
ffmpeg -i input.mp3 -af "afade=t=in:st=0:d=2,afade=t=out:st=178:d=2" ambient1.mp3
```

### Online Tools:
- Online Audio Converter (online-audio-converter.com)
- CloudConvert (cloudconvert.com)

## License Considerations

Ensure all audio files are:
- Free for commercial use
- Properly attributed if required
- Creative Commons or Public Domain
- No copyright restrictions for web use

## Testing

Test each sound:
- Loops smoothly without clicks or pops
- Comfortable volume level
- Not too distracting from the main message
- Works across different devices and browsers

---

**Note**: The website will work without sound files. The music toggle will simply fail silently if files are not present. Users can still enjoy the visual experience.

