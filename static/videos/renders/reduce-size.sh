# Reduce video size in renders
reduce_to=480
for video_file in */*.mp4; do
    ffmpeg -y -i $video_file -vf scale=$reduce_to:$reduce_to $video_file.tmp.mp4
    mv -v $video_file.tmp.mp4 $video_file
done
