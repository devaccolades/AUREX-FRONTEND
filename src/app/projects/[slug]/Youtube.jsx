"use client";

const getEmbedUrl = (url) => {
  if (!url) return "";

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes("/embed/")) return url;

  return "";
};

export default function YoutubeVideosSection({ projectVideos }) {
  if (!Array.isArray(projectVideos) || projectVideos.length === 0) return null;

  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="container">
        <div
          className={`grid gap-6
            ${projectVideos.length === 1 ? "grid-cols-1" : ""}
            ${projectVideos.length === 2 ? "grid-cols-1 md:grid-cols-2" : ""}
            ${projectVideos.length >= 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}
          `}
        >
          {projectVideos.map((video, index) => {
            const embedUrl = getEmbedUrl(video.video_url);
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
