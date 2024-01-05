import { getUsers } from '../utils';

export default function Page() {
  return <div>{JSON.stringify(getUsers())}</div>;
}
