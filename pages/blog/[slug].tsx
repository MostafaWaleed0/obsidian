import { Container } from 'components/common';
import FormView from 'components/form';
import components from 'components/MDXComponents';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { mdToHtml } from 'lib/md';
import { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { join } from 'path';

export default function BlogPost({
  frontmatter,
  content
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title={`Obsidian - ${frontmatter.title}`}
      description={frontmatter?.description}
    >
      <article className="container my-40">
        <div className="max-w-[46rem] mx-auto w-fit">
          <div className="prose space-y-12">
            <h1>{frontmatter.title}</h1>
            <MDXRemote
              {...content}
              components={{
                ...components
              }}
            />
          </div>
          <hr className="my-10" />
          <div>
            <FormView />
          </div>
        </div>
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const files = readdirSync(join(process.cwd(), 'posts'));
  const paths = files.map((file) => ({
    params: { slug: file.replace('.md', '') }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = readFileSync(
    join(process.cwd(), 'posts', `${slug}.md`),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const { html } = await mdToHtml(content);

  return {
    props: { frontmatter, content: html }
  };
}
