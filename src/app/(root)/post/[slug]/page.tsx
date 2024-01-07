import { getPostBySlug } from '@/app/utils';

export default function Page({ params }: { params: { slug: string } }) {
  return <div>{getPostBySlug(params.slug).content}</div>;
}
