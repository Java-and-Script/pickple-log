"use client";

import { useRouter } from "next/navigation";
import { GitHubBadge } from "../GitHubBadge/GitHubBadge";

export const MemberItem = ({ memberId }: { memberId: string }) => {
  const router = useRouter();

  return (
    <div
      className="bg-white flex items-center gap-[24px] w-[780px] h-[98px] pt-[26px] pb-[26px] pr-[26px] cursor-pointer"
      onClick={() => router.push(`user/${memberId}`)}
    >
      <div className="w-[50px] h-[50px] border-solid border-[1px] rounded-[100%] border-[#9ca3af]" />
      <div className="flex-col">
        <div className="text-xl font-bold">깃허브 닉네임</div>
        <div className="max-w-[500px] text-base truncate ">
          안녕하세요 어쩌구 저쩌구 쩌절티비입니다.안녕하세요 어쩌구 저쩌구
          쩌절티비입니다.안녕하세요 어쩌구 저쩌구 쩌절티비입니다.안녕하세요
          어쩌구 저쩌구 쩌절티비입니다.안녕하세요 어쩌구 저쩌구
          쩌절티비입니다.안녕하세요 어쩌구 저쩌구 쩌절티비입니다.
        </div>
      </div>
      <div className="w-[50px] h-[50px] ml-auto">
        <GitHubBadge memberId={memberId} />
      </div>
    </div>
  );
};
