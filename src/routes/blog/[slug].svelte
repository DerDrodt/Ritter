<script context="module" lang="ts">
  import type { Common } from "@sapper/common";
  import type { Post } from "../../types/post";

  export const preload: Common.Preload = async function (this, { params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  };
</script>

<script lang="ts">
  export let post: Post;
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
  <meta name="Description" content={post.metadata.description} />
</svelte:head>

<article class="post listify">
  <h1>{post.metadata.title}</h1>
  <p class="standfirst">{post.metadata.description}</p>

  <p class="byline">
    <time datetime={post.metadata.date}>{post.metadata.dateString}</time>
  </p>
  <div class="content">
    {@html post.html}
  </div>
</article>

<style>
  .post {
    padding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);
    max-width: var(--main-width);
    margin: 0 auto;
  }

  .post h1 {
    color: var(--second);
    max-width: 20em;
    margin: 0 0 0.8rem 0;
  }

  h1 {
    font-weight: 400;
  }

  .standfirst {
    font-size: var(--h5);
    color: var(--second);
    margin: 0 0 1em 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }

  .byline {
    margin: 0 0 2rem 0;
    padding: 0;
    font-size: var(--h6);
    text-transform: uppercase;
  }

  .post p,
  .content {
    text-align: justify;
  }
</style>
