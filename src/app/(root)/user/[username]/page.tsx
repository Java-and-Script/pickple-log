import { getPostDatasByUsername, getUsers } from '@/app/utils';

export default function Page({ params }: { params: { username: string } }) {
  return <div>{JSON.stringify(getPostDatasByUsername(params.username))}</div>;
}

export function generateStaticParams() {
  const users = getUsers();
  return users.map((user) => ({ username: user.name }));
}
