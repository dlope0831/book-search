import {gql} from "@apollo/client";

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        savedBooks {
            bookId
            authors
            image
            description
            title
            link
        }
    }
}
`;
export const QUERY_BOOK = gql`
  query book($id: ID!) {
    book(_id: $id) {
        book {
            _id
            authors
            description
            title
            image
            link
        }
    }
  }
`;