import React from "react";
import { Link } from "react-router-dom";

export default function CardEl({ post }) {
  return (
    <div>
      {post.author ? (
        <div className="flex  items-center px-2 py-3 font-semibold text-sm">
          <img src={post.author.avatar.url} alt="" className="w-10 h-10 mr-8" />
          <span>{post.author.name}</span>
        </div>
      ) : null}
      <img
        src={post.coverPhoto.url}
        alt={post.title}
        className="w-full h-60 object-cover"
      />
      <div className="flex flex-col justify-between p-2">
        <p className="font-bold text-sm my-3 border-b pb-6">{post.title}</p>
        <div className="w-full">
          <Link
            to={`/blogs/${post.slug}`}
            className="border-2 border-primary text-primary w-full inline-block text-center py-1 rounded-xl hover:bg-primary hover:text-white duration-300 "
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
