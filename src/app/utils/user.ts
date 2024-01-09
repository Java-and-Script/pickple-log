import { User } from '@/type/User';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

let cachedUsers: User[] = [];

export function getUsers() {
  if (cachedUsers.length !== 0) {
    return cachedUsers;
  }

  const userDirs = readdirSync(`./`, {
    withFileTypes: true,
  })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const userContents = userDirs.map((dir) =>
    readFileSync(`./${dir}/index.md`, 'utf8')
  );

  const users: User[] = userDirs.map((name, i) => {
    const userContent = userContents[i];
    const { data } = matter(userContent) as any;
    return { name, ...data };
  });

  cachedUsers = users;
  return users;
}

export function getUsersByRole(role: string) {
  const users = getUsers();
  return users.filter((user) => user.role === role);
}
