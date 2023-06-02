import React from "react";
import Blogs from "../Blog/Blogs";
import Author from "../Author/Author";

export default function HomPage() {
  return (
    <div className="w-full px-10 ">
      <div className="max-w-[1200px] m-auto grid grid-cols-3 gap-x-6">
        <div className="grid col-span-3  md:col-span-1  mt-4">
          <div className="font-bold text-2xl">Authors</div>
          <Author />
        </div>
        <div className="grid col-span-3 md:col-span-2 mt-4">
          <div className="font-bold text-2xl">Blogs</div>
          <Blogs />
        </div>
      </div>
    </div>
  );
}
