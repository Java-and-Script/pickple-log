import PostItem from '@/app/_components/PostItem';
import { getPostDatas } from '@/app/utils';

export default function Home() {
  const postDatas = getPostDatas();
  return (
    <div>
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
