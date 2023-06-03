import React from "react";
import { useParams } from "react-router-dom";
import { get_author_info } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import Spinner from "../shared/Spinner";
import CardEl from "../shared/CardEl";
export default function AuthorPage() {
  const params = useParams();
  const slug = params.slug;
  const { data, loading, errors } = useQuery(get_author_info, {
    variables: {
      slug,
    },
  });
  if (loading) return <Spinner />;
  const { field, avatar, name, description, posts } = data.author;
  return (
    <div className="w-full px-10 ">
      <div className="max-w-[1200px] m-auto mb-20 ">
        <div className="text-center my-20">
          <img src={avatar.url} alt="" className="w-60 m-auto mb-6" />
          <p className="font-bold text-2xl">{name}</p>
          <p className="mt-3 text-[rgba(0,0,0,0.6)] ">{field}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description.html }}></div>
      </div>

      <div className="m-auto max-w-[1200px]">
        <div className="grid grid-cols-12 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-md overflow-hidden shadow-xl"
            >
              <CardEl post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
