# usage: prepare_video.sh /path/to/teaser/video.mp4

# thumbnail (currently unused)
ffmpeg \
  -ss 00:00:00 -i $1 \
  -vframes 1 \
  teaser.png

# webm vp9 (default)
ffmpeg \
  -to 00:00:12 -i $1 \
  -vcodec libvpx-vp9 -b:v 2M -an \
  teaser.webm

# mp4 (fallback)
ffmpeg \
  -to 00:00:12 -i $1 \
  -vcodec libx264 -crf 24 -preset slow -pix_fmt yuv420p -profile:v baseline \
  -an \
  teaser.mp4
