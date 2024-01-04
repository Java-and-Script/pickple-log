import Image, { StaticImageData } from "next/image";

export default function PostItem({
  title,
  detail,
  author,
  date,
  profileImage,
}: {
  title: string;
  detail: string;
  author: string;
  date: Date;
  profileImage: StaticImageData;
}) {
  const dateString = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return (
    <div className="w-3/4 flex flex-col gap-3">
      <h1 className="font-bold truncate">{title}</h1>
      <p className="truncate">{detail}</p>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={profileImage}
            alt="profile Image"
            className="w-6 border-1 border-black rounded-full"
          />
          <p>{author}</p>
        </div>
        <p className="text-gray-300 items-center">{dateString}</p>
      </div>
    </div>
  );
}
