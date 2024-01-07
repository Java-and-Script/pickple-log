import { MemberItem } from '@/app/_components/MemberItem';
import { getUsersByRole } from '@/app/utils';

export default function Page({ params }: { params: { role: string } }) {
  const users = getUsersByRole(params.role);

  return (
    <div>
      {users.map((user) => (
        <MemberItem
          key={user.name}
          name={user.name}
          image={user.image}
          github={user.github}
          introduce={user.introduce}
        />
      ))}
    </div>
  );
}
