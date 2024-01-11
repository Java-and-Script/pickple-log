'use client';

import { Tab } from '@/app/_components/Tab';
import { useRouter, usePathname } from 'next/navigation';

const tabItemProps = [
  {
    text: '전체',
    href: '/',
  },
  {
    text: 'FE',
    href: '/category/fe',
  },
  {
    text: 'BE',
    href: '/category/be',
  },
];

export function PostTab() {
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
