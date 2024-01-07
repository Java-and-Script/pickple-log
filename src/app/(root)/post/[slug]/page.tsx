import { getPostBySlug } from '@/app/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function Page({ params }: { params: { slug: string } }) {
  const mdxSource = getPostBySlug(params.slug).content;
  return (
    <div className="prose dark:text-white">
      <MDXRemote
        source={mdxSource}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [],
            rehypePlugins: [],
          },
        }}
      />
    </div>
  );
}
