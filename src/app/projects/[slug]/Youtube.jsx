"use client";

/**
 * Paste FULL YouTube links here
 */
const projectVideos = [
  {
    link: "https://www.youtube.com/watch?v=AbCdEf123",
  },
  {
    link: "https://youtu.be/XyZ987654",
  },
  // {
  //   link: "https://www.youtube.com/watch?v=AnotherVideo",
  // },
];

/**
 * Converts any YouTube link to embed URL
 */
const getEmbedUrl = (url) => {
  if (!url) return "";

  // youtu.be/XXXX
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // youtube.com/watch?v=XXXX
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  // already embed
  if (url.includes("/embed/")) {
    return url;
  }

  return "";
};

export default function YoutubeVideosSection() {
  if (!projectVideos || projectVideos.length === 0) return null;

  return (
    <section className="">
      <div className="container">

    

        {/* VIDEO GRID */}
        <div
          className={`
            grid grid-2 md:gap-6
            ${projectVideos.length === 1 ? "grid-cols-1" : ""}
            ${projectVideos.length === 2 ? "grid-cols-1 md:grid-cols-2" : ""}
            ${projectVideos.length >= 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}
          `}
        >
          {projectVideos.map((video, index) => {
            const embedUrl = getEmbedUrl(video.link);

            if (!embedUrl) return null;

            return (
              <div
                key={index}
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md"
              >
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title={`Project video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
