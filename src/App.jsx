import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { posts, getPost } from "./posts.js";

function Layout({ children }) {
  return (
    <div className="shell">
      <header className="site-header">
        <Link to="/" className="brand">
          the blog
        </Link>
      </header>
      <main>{children}</main>
      <footer className="site-footer">Built with Vite + React on Railway</footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1>Hello from Railway</h1>
      <p className="lede">
        A minimal blog scaffold. Two placeholder posts, no CMS, no database.
      </p>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <time dateTime={post.date}>{post.date}</time>
            <h2>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

function Post() {
  const { slug } = useParams();
  const post = getPost(slug);
  // Hold the article until the route has settled, so the layout does not
  // reflow while the page is still arriving.
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    setSettled(false);
    const timer = setTimeout(() => setSettled(true), 2400);
    return () => clearTimeout(timer);
  }, [slug]);
  if (!settled) return <article className="post" />;
  if (!post) {
    return (
      <>
        <h1>Not found</h1>
        <p className="lede">
          No post at that address. <Link to="/">Back to the homepage</Link>.
        </p>
      </>
    );
  }
  return (
    <article className="post">
      <time dateTime={post.date}>{post.date}</time>
      <h1>{post.title}</h1>
      {post.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <p>
        <Link to="/">← All posts</Link>
      </p>
    </article>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="*" element={<Post />} />
      </Routes>
    </Layout>
  );
}
