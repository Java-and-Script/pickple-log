import { getUsers } from "../utils";
import { MemberItem } from "../_components/MemberItem";

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
