import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function PostItem({
  title,
  detail,
  author,
  date,
  profileImage,
  articleName,
}: {
  title: string;
  detail: string;
  author: string;
  date: Date;
  profileImage: StaticImageData;
  articleName: string;
}) {
  const dateString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return (
    <div className="flex flex-col gap-3">
      <Link href={`/post/${articleName}`}>
        <h1 className="font-bold truncate">{title}</h1>
        <p className="truncate">{detail}</p>
      </Link>
      <div className="w-full flex justify-between items-center">
        <Link
          href={`https://github.com/${author}`}
          className="flex items-center gap-2"
        >
          <Image
            src={profileImage}
            alt="profile Image"
            className="w-6 border-1 border-black rounded-full"
          />
          <p>{author}</p>
        </Link>
        <p className="text-gray-300 items-center">{dateString}</p>
      </div>
    </div>
  );
}
