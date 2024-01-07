import { getPostDatas } from '@/app/utils';
import { PostItemList } from './_components/PostItemList';

export default function Home() {
  const postDatas = getPostDatas();

  return <PostItemList postDatas={postDatas} />;
}
