import { MemberItem } from '@/app/_components/MemberItem';
import { getUsers } from '@/app/utils';

export default function Page() {
  const users = getUsers();

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
