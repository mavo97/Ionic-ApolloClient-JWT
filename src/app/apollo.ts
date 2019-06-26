import {Query} from 'apollo-angular';
import gql from 'graphql-tag';

export interface User {
  id: string;
  email: string;
  username: string;
}
export interface Response {
  me: User[];
}
export class AllPostsGQL extends Query<Response> {
  document = gql`
    query currentUser {
      me {
        email
        username
      }
    }
  `;
}