import Link from "next/link";
import Image from "next/image";

import HeaderNavMenu from "./HeaderNavMenu";

import github from "@/assets/github.svg";
import notion from "./assets/notion.svg";
import pickple from "./assets/pickple.svg";
import pickpleLog from "./assets/pickple-log.svg";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

export default function Header() {
  return (
    <div className="w-full flex px-10 items-center py-2.5 bg-white dark:bg-black">
      <div className="flex flex-1 gap-7">
        <Link href="/">
          <Image src={pickpleLog} alt="pickple log 로고" />
        </Link>
        <HeaderNavMenu />
      </div>
      <div className="flex flex-1 gap-7 justify-end">
        <div className="flex items-center gap-4">
          <Link href="https://pickple.kr">
            <Image
              src={pickple}
              alt="pickple 로고"
              className="opacity-80 hover:opacity-100"
            />
          </Link>
          <Link href="https://gamy-emperor-679.notion.site/Pickple-0bcbeddc3fc63f61956c0c58cf098603?pvs=4">
            <Image
              src={notion}
              alt="notion 로고"
              className="opacity-80 hover:opacity-100"
            />
          </Link>
          <Link href="https://github.com/Java-and-Script">
            <Image
              src={github}
              alt="github 로고"
              className="opacity-80 hover:opacity-100"
            />
          </Link>
        </div>
        <DarkModeButton />
      </div>
    </div>
  );
}
