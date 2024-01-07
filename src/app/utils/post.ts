import { Post, PostData } from '@/type/Post';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { getUsers } from '.';

let cachedPostDatas: PostData[] = [];

export function getPostDatas() {
  if (cachedPostDatas.length !== 0) {
    return cachedPostDatas;
  }

  const users = getUsers();
  const fileEntries = users.map(({ name }) =>
    readdirSync(`./public/${name}`, {
      withFileTypes: true,
    })
  );

  const fileDirs = users.flatMap(({ name }, index) => {
    return fileEntries[index]
      .filter((entry) => entry.isDirectory())
      .map((entry) => `${name}/${entry.name}`);
  });

  const fileContents = fileDirs.map((dir) =>
    readFileSync(`./public/${dir}/index.md`, 'utf8')
  );

  const postDatas: PostData[] = fileDirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const [username, fileSlug] = slug.split('/');
    const user = users.find((user) => user.name === username);
    const { data } = matter(fileContent) as any;
    return { slug: fileSlug, author: user, ...data };
  });

  const sortedPostDatas = postDatas.toSorted((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    if (isNaN(aTime + bTime)) {
      throw new Error('invalid post date');
    }

    return bTime - aTime;
  });

  cachedPostDatas = sortedPostDatas;
  return sortedPostDatas;
}

export function getPostDatasByUsername(username: string) {
  const postDatas = getPostDatas();
  return postDatas.filter((postData) => postData.author.name === username);
}

export function getPostDatasByCategory(category: string) {
  const postDatas = getPostDatas();
  return postDatas.filter((postData) => postData.author.role === category);
}

export function getPostBySlug(slug: string): Post {
  const postDatas = getPostDatas();
  const postData = postDatas.find((postData) => postData.slug === slug);
  if (!postData) {
    throw new Error('Invalid post slug');
  }

  const fileContent = readFileSync(
    `./public/${postData.author.name}/${postData.slug}/index.md`,
    'utf8'
  );
  const { content } = matter(fileContent);

  return { ...postData, content };
}
