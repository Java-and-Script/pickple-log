import { PropsWithChildren } from 'react';
import { PostTab } from './_components/PostTab';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <PostTab />
      {children}
    </div>
  );
}
