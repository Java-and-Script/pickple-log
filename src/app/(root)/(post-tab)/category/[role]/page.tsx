import { getPostDatasByCategory } from '@/app/utils';
import { PostItemList } from '../../_components/PostItemList';

export default function Page({ params }: { params: { role: string } }) {
  const postDatas = getPostDatasByCategory(params.role);

  return <PostItemList postDatas={postDatas} />;
}
