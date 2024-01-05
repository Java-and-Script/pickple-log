import { getPostDatasByCategory } from '@/app/utils';

export default function Page({ params }: { params: { role: string } }) {
  return <div>{JSON.stringify(getPostDatasByCategory(params.role))}</div>;
}
