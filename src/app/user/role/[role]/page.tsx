import { getUsersByRole } from '@/app/utils';

export default function Page({ params }: { params: { role: string } }) {
  return <div>{JSON.stringify(getUsersByRole(params.role))}</div>;
}
