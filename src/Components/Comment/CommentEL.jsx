import React from "react";

export default function CommentEL({ comments }) {
  

  return (
    <div >
     
      {
        comments ?
      <div className="border p-4 rounded-lg">
        <div className="flex items-center">
          <span className="w-10 h-10 bg-[#bdbdbd]  rounded-full text-white flex justify-center items-center font-bold">
            {comments.name.split("")[0].toUpperCase()}
          </span>
          <p className="ml-4 font-semibold">{comments.name}</p>
        </div>
        <div className="ml-14 mt-4">
            <p>{comments.text}</p>
        </div>
      </div> : 
      null
      }
    </div>
  );
}
