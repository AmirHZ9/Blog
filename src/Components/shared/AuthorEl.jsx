import React from "react";

export default function AuthorEl({ author }) {
  console.log(author);
  return (
    <div className="border-b mb-4 pb-3">
      <a href="" className="flex items-center font-bold">
        <img src={author.avatar.url} alt="" className="w-10 h-10 mr-8" />
        <p>{author.name}</p>
      </a>
    </div>
  );
}
