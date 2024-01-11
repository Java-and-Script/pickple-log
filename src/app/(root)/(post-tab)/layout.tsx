import { PropsWithChildren } from 'react';
import { PostTab } from './_components/PostTab';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-2">
      <PostTab />
      {children}
    </div>
  );
}
