import { PropsWithChildren } from 'react';
import { UserTab } from './_components/UserTab';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <UserTab />
      {children}
    </div>
  );
}
