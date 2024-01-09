import PostItem from '@/app/_components/PostItem';
import { PostData } from '@/type/Post';

export function PostItemList({ postDatas }: { postDatas: PostData[] }) {
  return (
    <div className="flex flex-col gap-4">
      {postDatas.map(({ slug, title, author, date, spoiler }) => (
        <PostItem
          key={slug}
          title={title}
          articleName={slug}
          author={author.name}
          date={new Date(date)}
          detail={spoiler}
          profileImage={{ src: author.image, width: 100, height: 100 }}
        />
      ))}
    </div>
  );
}
