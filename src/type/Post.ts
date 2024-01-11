import { User } from './User';

export type PostData = Omit<Post, 'content'>;

export type Post = {
  slug: string;
  title: string;
  author: User;
  date: string;
  spoiler: string;
  content: string;
};
