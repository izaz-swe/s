import React, { useState } from "react";

const BlogCard = ({ title, description, youtubeLink }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <iframe
        width="200"
        height="100"
        src={youtubeLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-700">
          {showFullDescription
            ? description
            : `${description.slice(0, 100)}...`}
          {description.length > 100 && (
            <button
              className="text-blue-500 underline"
              onClick={toggleDescription}
            >
              {showFullDescription ? "See less" : "See more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
