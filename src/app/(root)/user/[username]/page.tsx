import BackButton from './_components/BackButton';
import { MemberItem } from '@/app/_components/MemberItem';
import { PostItemList } from '@/app/_components/PostItemList';
import { getPostDatasByUsername, getUser, getUsers } from '@/app/utils';
import BackArrow from '@/assets/backArrow.svg';
import Image from 'next/image';

export default function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  const postDatas = getPostDatasByUsername(username);
  const userData = getUser(username);

  return (
    <>
      <BackButton>다른 팀원 보기</BackButton>
      <div className="flex flex-col gap-4">
        <MemberItem key={username} {...userData} />
        <PostItemList postDatas={postDatas} />
      </div>
    </>
  );
}

export function generateStaticParams() {
  const users = getUsers();
  return users.map((user) => ({ username: user.name }));
}
