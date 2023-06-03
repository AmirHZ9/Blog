import { useQuery } from "@apollo/client";
import React from "react";
import { get_author } from "../../graphql/queries";
import AuthorEl from "../shared/AuthorEl";

export default function Author() {
  const { loading, data, error } = useQuery(get_author);
  console.log({ loading, data, error });
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.authors.map((author) => <AuthorEl author={author} />)
      )}
    </div>
  );
}
