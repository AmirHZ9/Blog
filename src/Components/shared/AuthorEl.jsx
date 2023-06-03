import React from "react";
import { Link } from "react-router-dom";

export default function AuthorEl({ author }) {

  return (
    <div className="border-b mb-4 pb-3">
      <Link to={`Authors/${author.slug}`} className="flex items-center font-bold">
        <img src={author.avatar.url} alt="" className="w-10 h-10 mr-8" />
        <p>{author.name}</p>
      </Link>
    </div>
  );
}
