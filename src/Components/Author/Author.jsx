import { useQuery } from "@apollo/client";
import React from "react";
import { get_author } from "../../graphql/queries";
import AuthorEl from "../shared/AuthorEl";

export default function Author() {
  const { loading, data, error } = useQuery(get_author);
 
  return (
    <div className="shadow p-3 rounded-xl">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.authors.map((author) => <AuthorEl key={author.id} author={author} />)
      )}
    </div>
  );
}
