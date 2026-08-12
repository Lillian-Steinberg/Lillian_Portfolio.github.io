import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";


const Projects = () => {
  const youtubeVideo = {
  src: "https://www.youtube.com/embed/HzrWgoBawng",
  thumbnail: "https://img.youtube.com/vi/HzrWgoBawng/hqdefault.jpg",
  type: "youtube"};
  const [selectedCategory, setSelectedCategory] = useState("Animation");
  const categoryOrder = ["Animation", "Product", "Lifestyle", "Packaging", "Technical"];
  const [groupedMedia, setGroupedMedia] = useState({});
  const [lightboxItem, setLightboxItem] = useState(null); // Currently selected media for lightbox

  useEffect(() => {
    const modules = import.meta.glob(
      "../assets/images/projects/*/*.{webp,jpg,png,mp4}",
      { eager: true }
    );

    const grouped = {};

    Object.keys(modules).forEach((path) => {
      const parts = path.split("/");
      const category = parts[parts.length - 2];
      grouped[category] = grouped[category] || [];
      grouped[category].push({
        src: modules[path].default,
        type: path.endsWith(".mp4") ? "video" : "image",
      });
    });

    grouped["Animation"] = grouped["Animation"] || [];
    grouped["Animation"].push(youtubeVideo);

    setGroupedMedia(grouped);
  }, []);

  const categories = Object.keys(groupedMedia);

  return (
    <section id="projects" className="py-16 bg-[#fff7eb]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">
          Work
        </h2>

        {/* Category Filter Buttons */}
        <div className="text-center mb-6">
          {categoryOrder
  .filter((cat) => groupedMedia[cat]) // only show categories that exist
  .map((cat) => (
    <button
      key={cat}
      className={`px-6 py-2 mx-2 rounded ${
        selectedCategory === cat
          ? "bg-primary text-white"
          : "bg-white text-primary"
      }`}
      onClick={() => setSelectedCategory(cat)}
    >
      {cat}
    </button>
))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {groupedMedia[selectedCategory]?.map((item, idx) => (
            <div
              key={idx}
              className="project-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setLightboxItem(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt=""
                  className="w-full object-contain rounded-lg"
                  loading="lazy"
                />
              ) : item.type === "youtube" ? (
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt="YouTube animation"
                    className="w-full object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/70 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl">
                      ▶
                    </div>
                  </div>
                </div>
              ) : (
                <video
                  src={item.src}
                  className="w-full object-contain rounded-lg"
                  muted
                  playsInline
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {lightboxItem && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setLightboxItem(null)} // click background to close
  >
    <div
      className="relative max-w-5xl w-full flex justify-center items-center"
      onClick={(e) => e.stopPropagation()} // prevent accidental close
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl z-50"
        onClick={() => setLightboxItem(null)}
      >
        <IoClose />
      </button>

      {lightboxItem.type === "image" ? (
        <img
          src={lightboxItem.src}
          alt=""
          className="max-h-screen w-auto h-auto rounded shadow-lg object-contain"
        />
      ) : lightboxItem.type === "youtube" ? (
        <iframe
          src={`${lightboxItem.src}?autoplay=1`}
          title="YouTube video player"
          className="w-full aspect-video rounded shadow-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) :(
        <video
          src={lightboxItem.src}
          controls
          autoPlay
          className="max-h-screen w-auto h-auto rounded shadow-lg object-contain"
        />
      )}
    </div>
  </div>
)}
    </section>
  );
};

export default Projects;
