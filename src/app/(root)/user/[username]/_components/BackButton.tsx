'use client';

import BackArrow from '@/assets/backArrow.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function BackButton({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <button className="flex items-center gap-3" onClick={() => router.back()}>
      <Image src={BackArrow} alt="BackArrow" />
      <span className="font-bold">{children}</span>
    </button>
  );
}
