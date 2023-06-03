import { gql } from "@apollo/client";
const Get_Blogs_Info = gql`
  query MyQuery {
    posts {
      author {
        name
        avatar {
          url
        }
      }
      slug
      title
      id
      coverPhoto {
        url
      }
    }
  }
`;

const get_author = gql`
query MyQuery {
  authors {
    avatar {
      url
    }
    name
    slug
  }
}`

export {Get_Blogs_Info,get_author}