import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { get_post_info } from "../../graphql/queries";
import Spinner from "../shared/Spinner";
import Comment from "../Comment/Comment";
import CommentEL from "../Comment/CommentEL";
export default function BLogPage() {
  const params = useParams();
  const slug = params.slug;
  const { data, loading, errors } = useQuery(get_post_info, {
    variables: {
      slug,
    },
  });
console.log(data)
  if (loading) return <Spinner />;
  const { author, content, coverPhoto, date, title } = data.post;
  return (
    <div className="w-full px-10">
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-between my-10">
          <p className="text-2xl font-bold">{title}</p>
          <Link to={-1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
        <div className="mb-20">
          <img
            src={coverPhoto.url}
            alt={title}
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex items-center">
          <img
            src={author.avatar.url}
            alt={author.name}
            className="w-20 mr-8"
          />
          <div>
            <p className="font-bold">{author.name}</p>
            <p className="font-semibold text-[rgba(0,0,0,0.6)]">
              {author.field}
            </p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: content.html }}
          className="my-10"
        ></div>
      </div>
      <Comment slug={slug}/>
      <div className=" max-w-[1200px] m-auto mt-20 p-4 shadow-xl rounded-lg">

      <div className="mb-6">
        <p className="text-primary font-semibold">Comments</p>
      </div>
      {  data.post.comments.length ?
        data.post.comments.map(comment => <CommentEL key={comment.id} comments={comment}/>) :
        <p >There is no comments.</p>
      }
      </div>
    </div>
  );
}
