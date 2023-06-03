import React from 'react'
import { useParams } from 'react-router-dom'
import { get_author_info } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
export default function AuthorPage() {
    const params = useParams()
    const slug = params.slug
    const { data, loading, errors } = useQuery(get_author_info, {
        variables: {
          slug,
        },
      });
      console.log({ data, loading, errors })
  return (
    <div>AuthorPage</div>
  )
}
