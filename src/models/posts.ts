import { User } from "./users";

export interface Post {
  id: number;
  title: string;
  body: string;
  author: User;
  userID: number;
}