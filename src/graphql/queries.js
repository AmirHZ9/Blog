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
      id
    }
  }
`;

const get_post_info = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        avatar {
          url
        }
        field
        name
      }
      comments {
        name
        id
        text
      }
      content {
        html
      }
      date
      title
      coverPhoto {
        url
      }
    }
  }
`;

export { Get_Blogs_Info, get_author, get_post_info };
