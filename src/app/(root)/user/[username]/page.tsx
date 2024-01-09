import { PostItemList } from '@/app/_components/PostItemList';
import { getPostDatasByUsername, getUsers } from '@/app/utils';

export default function Page({ params }: { params: { username: string } }) {
  const postDatas = getPostDatasByUsername(params.username);

  return <PostItemList postDatas={postDatas} />;
}

export function generateStaticParams() {
  const users = getUsers();
  return users.map((user) => ({ username: user.name }));
}
