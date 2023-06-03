import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
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
  console.log({ data, loading, errors });
    if(loading) return    <Spinner />
  return (
    <div>
        
    </div>
  );
}
