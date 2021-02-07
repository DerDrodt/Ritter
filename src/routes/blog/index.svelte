<script context="module" lang="ts">
  import type { Common } from "@sapper/common";
  import type { Post } from "../../types/post";

  export const preload: Common.Preload = function (this) {
    return this.fetch(`blog.json`)
      .then((r: { json: () => any }) => r.json())
      .then((posts: Post[]) => {
        return { posts };
      });
  };
</script>

<script lang="ts">
  export let posts: Post[];
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="Description" content="TODO" />
</svelte:head>

<div class="posts stretch">
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <article class="post" data-pubdate={post.metadata.dateString}>
      <a
        class="no-underline"
        rel="prefetch"
        href="blog/{post.slug}"
        title="Den Artikel lesen »"
      >
        <h2>{post.metadata.title}</h2>
        <p>{post.metadata.description}</p>
      </a>
    </article>
  {/each}
</div>

<style>
  .posts {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    min-height: calc(100vh - var(--nav-h));
    padding: var(--top-offset) var(--side-nav) 6rem var(--side-nav);
    max-width: var(--main-width);
    margin: 0 auto;
  }

  .post a:hover,
  .post a:hover > h2 {
    color: var(--flash);
  }

  h2 {
    display: inline-block;
    margin: 1rem 0 0.4rem 0;
    color: var(--text);
    max-width: 18em;
    font-size: var(--h3);
    font-weight: 400;
  }

  .post:first-child {
    margin: 0 0 2rem 0;
    padding: 0 0 1rem 0;
    border-bottom: var(--border-w) solid #676778 5b;
    /* based on --second */
  }
  .post:first-child h2 {
    font-size: 3rem;
    font-weight: 400;
    color: var(--second);
  }
  .post:first-child::before,
  .post:nth-child(2)::before {
    content: "Neuester Beitrag • " attr(data-pubdate);
    color: var(--text);
    font-size: var(--h6);
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .post:nth-child(2)::before {
    content: "Ältere Beiträge";
  }
  .post p {
    font-size: var(--h5);
    max-width: 30em;
    color: var(--second);
  }
  .post > a {
    display: block;
  }
</style>
