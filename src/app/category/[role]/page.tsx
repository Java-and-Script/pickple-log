import { getPostsByCategory } from '@/app/utils';

export default function Page({ params }: { params: { role: string } }) {
  return <div>{JSON.stringify(getPostsByCategory(params.role))}</div>;
}
