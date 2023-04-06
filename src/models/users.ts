import { Post } from "./posts";

export interface User {
  id: number;
  email: string;
  pwd: string;
  name: string;
  post: Post[];
}