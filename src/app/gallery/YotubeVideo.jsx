"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// const YOUTUBE_LINK = "https://www.youtube.com/watch?v=ryZG_2pjp4g&t=1s";

const getVideoIdFromUrl = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
};

export default function YoutubeVideoSection({galleryVideos}) {
  const [play, setPlay] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
  if (!play) return;

  const videoId = getVideoIdFromUrl(galleryVideos.main_video_url);
  if (!videoId) return;

  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  window.onYouTubeIframeAPIReady = () => {
    playerRef.current = new window.YT.Player("yt-player", {
      videoId,
      playerVars: {
        autoplay: 1,
        controls: 1,
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            playerRef.current?.destroy(); // 👈 destroy FIRST
            playerRef.current = null;
            setPlay(false); // 👈 THEN update state
          }
        },
      },
    });
  };

  // ✅ THIS IS THE CLEANUP FUNCTION
  return () => {
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }
  };
}, [play]);


  return (
    <section className="w-full bg-white py-6 md:py-8 lg:py-10">
      <div className="relative w-full aspect-[21/9] rounded-[20px] overflow-hidden">

        {/* THUMBNAIL */}
        {!play && (
          <button
            onClick={() => setPlay(true)}
            className="absolute inset-0 z-10 group"
          >
            <Image
              src={galleryVideos.main_video_thumbnail}
              alt={galleryVideos.main_video_alt}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 lg:w-20 h-10 lg:h-20 bg-white/90 rounded-full flex items-center justify-center text-xl lg:text-3xl group-hover:scale-110 transition">
                ▶
              </div>
            </div>
          </button>
        )}

        {/* YOUTUBE PLAYER */}
        {play && (
          <div
            id="yt-player"
            className="absolute inset-0 w-full h-full"
          />
        )}

      </div>
    </section>
  );
}
