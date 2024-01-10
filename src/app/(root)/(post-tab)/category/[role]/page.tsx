import { PostItemList } from '@/app/_components/PostItemList';
import { getPostDatasByCategory } from '@/app/utils';

export default function Page({ params }: { params: { role: string } }) {
  const postDatas = getPostDatasByCategory(params.role);

  return <PostItemList postDatas={postDatas} />;
}

export function generateStaticParams() {
  return [{ role: 'fe' }, { role: 'be' }];
}
