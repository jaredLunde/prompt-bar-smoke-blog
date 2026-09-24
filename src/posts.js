export const posts = [
  {
    slug: "hello-world",
    title: "Hello, world",
    date: "2026-09-18",
    excerpt:
      "A placeholder first post, here to prove the list and the post page render.",
    body: [
      "This is placeholder copy for the first post. It exists so the index has something to link to and the post page has something to lay out.",
      "Replace it with real writing whenever the blog gets real writing.",
    ],
  },
  {
    slug: "deploying-on-railway",
    title: "Deploying on Railway",
    date: "2026-09-22",
    excerpt:
      "A second placeholder post, so the homepage list has more than one row.",
    body: [
      "Another placeholder. Two posts is enough to see spacing, dates, and hover states behave.",
      "The build is a plain Vite + React app, so the deployed service serves the static output.",
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
