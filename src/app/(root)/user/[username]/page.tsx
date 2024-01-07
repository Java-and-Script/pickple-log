import { getPostDatasByUsername } from '@/app/utils';

export default function Page({ params }: { params: { username: string } }) {
  return <div>{JSON.stringify(getPostDatasByUsername(params.username))}</div>;
}
