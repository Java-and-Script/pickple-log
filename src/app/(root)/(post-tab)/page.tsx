import { PostItemList } from '@/app/_components/PostItemList';
import { getPostDatas } from '@/app/utils';

export default function Home() {
  const postDatas = getPostDatas();

  return <PostItemList postDatas={postDatas} />;
}
