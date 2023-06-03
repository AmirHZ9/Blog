import { useQuery } from "@apollo/client";
import React from "react";
import { Get_Blogs_Info } from "../../graphql/queries";
import CardEl from "../shared/CardEl";

export default function Blogs() {
  const { loading, data, errors } = useQuery(Get_Blogs_Info);
  return (
    <div className="grid grid-cols-12 gap-4">
      {loading ? (
        <p>loading . . .</p>
      ) : (
        data.posts.map((post) => (
          <div key={post.id} className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-md overflow-hidden">
            <CardEl  post={post} />
          </div>
        ))
      )}
    </div>
  );
}
