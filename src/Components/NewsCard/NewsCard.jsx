import React from "react";
import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {

  const handleNews=(event)=>{
    event.preventDefault();
      
  }
  const {
    title,
    details,
    thumbnail_url,
    author,
    rating,
    total_view,
    tags,
  } = news;

  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "2-digit" }
  );

  return (
    <div className="card w-full bg-base-100 border mt-3 ">
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-3">
        <div className="flex items-center gap-3 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-2">

              <IoBookmarkOutline />
        <FaShareAlt className="text-gray-500 cursor-pointer" />

        </div>
      

      </div>

      {/* Title */}
      <div className="px-4 py-3">
        <h2 className="font-bold text-lg text-gray-900">{title}</h2>
      </div>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="w-full h-56 object-cover"
      />

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        <p>
          {details.slice(0, 180)}...
          <button onClick={handleNews} className="text-blue-600 font-semibold cursor-pointer">
            Read More
          </button>
        </p>

        <p className="mt-2 text-xs text-gray-500">
          {tags && (
            <>
              Tag Cloud:{" "}
              {tags.map((tag, i) => (
                <span key={i} className="text-gray-700 mr-1">
                  #{tag}
                </span>
              ))}
            </>
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200">
        <div className="flex items-center text-orange-400">
          {[...Array(Math.round(rating.number))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
