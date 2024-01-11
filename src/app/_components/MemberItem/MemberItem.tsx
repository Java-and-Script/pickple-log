'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import GitHub from '@/assets/github.svg';
import { User } from '@/type/User';

export const MemberItem = ({
  name,
  image,
  github,
  introduce,
}: Omit<User, 'role'>) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-[24px] max-w-[800px] mx-auto h-[98px] pt-[26px] pb-[26px] pr-[26px] cursor-pointer "
      onClick={() => router.push(`/user/${name}`)}
    >
      <div className="w-[50px] h-[50px] border-solid border-[1px] rounded-[100%] border-[#9ca3af] overflow-hidden">
        <Image src={image} alt={`${name}.image`} width={50} height={50} />
      </div>
      <div className="flex-col">
        <div className="text-xl font-bold">{name}</div>
        <div className="max-w-[500px] text-base truncate ">{introduce}</div>
      </div>
      <div className="w-[50px] h-[50px] ml-auto">
        <Link href={github} onClick={(event) => event.stopPropagation()}>
          <Image src={GitHub} alt="GitHub 로고" />
        </Link>
      </div>
    </div>
  );
};
