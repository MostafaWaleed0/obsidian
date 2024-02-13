import { Form } from "app/components/form";
import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/lib/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }
  const { title } = post.metadata;

  return {
    title,
  };
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container my-20">
      <div className="max-w-[46rem] mx-auto w-fit">
        <div className="prose space-y-12">
          <h1>{post.metadata.title}</h1>
          <Suspense fallback={null}>
            <CustomMDX source={post.content} />
          </Suspense>
        </div>
        <hr className="my-10" />
        <div>
          <Form />
        </div>
      </div>
    </article>
  );
}
