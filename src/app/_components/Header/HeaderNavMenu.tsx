"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function HeaderNavMenu() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex gap-5 font-bold text-gray-400 h-6">
      {segment === "(post-tab)" ? (
        <Link href="/" className="border-b border-gray-400">
          게시글
        </Link>
      ) : (
        <Link href="/">게시글</Link>
      )}
      {segment === "user" ? (
        <Link href="/user" className="border-b border-gray-400">
          팀원
        </Link>
      ) : (
        <Link href="/user">팀원</Link>
      )}
    </div>
  );
}
