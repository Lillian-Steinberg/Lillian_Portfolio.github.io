import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Product");
  const categoryOrder = ["Product", "Lifestyle", "Packaging", "Technical", "Animation"];
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

    setGroupedMedia(grouped);
  }, []);

  const categories = Object.keys(groupedMedia);

  return (
    <section id="projects" className="py-16 bg-lightgray">
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
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-4xl w-full">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-white text-3xl z-50"
        onClick={() => setLightboxItem(null)}
      >
        <IoClose />
      </button>

      {lightboxItem.type === "image" ? (
        <img
          src={lightboxItem.src}
          alt=""
          className="w-full h-auto rounded shadow-lg"
        />
      ) : (
        <video
          src={lightboxItem.src}
          controls
          autoPlay
          className="w-full h-auto rounded shadow-lg relative z-10"
        />
      )}
    </div>
  </div>
)}
    </section>
  );
};

export default Projects;
