import Link from "next/link";

export default function PageLink() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/sjfsfjsf">404</Link>
        </li>
      </ul>
    </div>
  );
}
