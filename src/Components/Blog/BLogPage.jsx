import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { get_post_info } from "../../graphql/queries";
import Spinner from "../shared/Spinner";

export default function BLogPage() {
  const params = useParams();
  const slug = params.slug;
  const { data, loading, errors } = useQuery(get_post_info, {
    variables: {
      slug,
    },
  });
  console.log({ data });
  if (loading) return <Spinner />;
  const { author, content, coverPhoto, date, title } = data.post;
  return (
    <div className="w-full px-10">
      <div className="max-w-[1200px]">
        <div className="flex justify-between my-10">
          <p className="text-2xl font-bold">{title}</p>
          <Link to={-1}>ba</Link>
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
          <div dangerouslySetInnerHTML={{__html:content.html}} className="my-10">

          </div>
      </div>
    </div>
  );
}
