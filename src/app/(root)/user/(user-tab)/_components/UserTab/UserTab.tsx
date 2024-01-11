'use client';

import { Tab } from '@/app/_components/Tab';
import { useRouter, usePathname } from 'next/navigation';

const tabItemProps = [
  {
    text: '전체',
    href: '/user',
  },
  {
    text: 'FE',
    href: '/user/role/fe',
  },
  {
    text: 'BE',
    href: '/user/role/be',
  },
];

export function UserTab() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Tab>
      {tabItemProps.map(({ text, href }) => (
        <Tab.Item
          key={href}
          className={pathname === href ? 'text-red-400 border-red-400' : ''}
          onClick={() => router.push(href)}
        >
          {text}
        </Tab.Item>
      ))}
    </Tab>
  );
}
