import posts from "./_posts.js";

const contents = JSON.stringify(
  posts().map((post) => {
    return {
      metadata: post.metadata,
      slug: post.slug,
    };
  }),
);

export function get(req: any, res: any) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
