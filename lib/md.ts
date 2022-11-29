import { serialize } from 'next-mdx-remote/serialize';

export async function mdToHtml(source) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'md'
    }
  });

  return {
    html: mdxSource
  };
}
