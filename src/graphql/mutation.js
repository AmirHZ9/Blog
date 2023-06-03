import { gql } from "@apollo/client";

const Send_Comment = gql`
  mutation sendComment($name: String!, $email: String!, $text: String!) {
    createComment(data: { name: $name, email: $email, text: $text }) {
      id
    }
  }
`;

export { Send_Comment };
