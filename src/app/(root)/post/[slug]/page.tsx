import { getPostBySlug } from '@/app/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Page({ params }: { params: { slug: string } }) {
  const mdxSource = getPostBySlug(params.slug).content;
  return (
    <div>
      <MDXRemote source={mdxSource} />
    </div>
  );
}
