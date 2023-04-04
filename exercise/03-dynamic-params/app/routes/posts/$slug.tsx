import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";

import { getPost } from "~/models/post.server";

export async function loader({ request, params }: LoaderArgs) {
  if (!params.slug) {
    throw new Error("Slug not found");
  }
  const post = await getPost(params.slug as string);

  if (!post) {
    throw new Error("Post not found");
  }
  const html = marked(post.markdown);
  return json({ post, html });
}

export default function PostRoute() {
  const { post, html } = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
