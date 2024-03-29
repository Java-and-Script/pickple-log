import ProgressBar from './ProgressBar';
import { getPostBySlug, getPostDatas } from '@/app/utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export default function Page({ params }: { params: { slug: string } }) {
  const mdxSource = getPostBySlug(params.slug).content;

  return (
    <div className="prose dark:text-white">
      <ProgressBar />
      <MDXRemote
        source={mdxSource}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [
              remarkGfm,
              remarkBreaks,
              [remarkToc, { tight: true, maxDepth: 3 }],
            ],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                {
                  theme: 'rose-pine',
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}

export function generateStaticParams() {
  const posts = getPostDatas();
  return posts.map(({ slug }) => ({
    slug,
  }));
}
