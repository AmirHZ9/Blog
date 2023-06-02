import React from "react";

export default function Header() {
  return (
    <div className="bg-primary w-full py-3 px-10 text-white mb-4">
      <div className="max-w-[1200px] flex justify-between m-auto">
        <div>
          <p className="text-xl font-semibold">Blog</p>
        </div>
        <div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
