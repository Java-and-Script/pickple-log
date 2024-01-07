import { getPostBySlug } from '@/app/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

export default function Page({ params }: { params: { slug: string } }) {
  const mdxSource = getPostBySlug(params.slug).content;
  return (
    <div className="prose dark:text-white">
      <MDXRemote
        source={mdxSource}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [],
          },
        }}
      />
    </div>
  );
}
