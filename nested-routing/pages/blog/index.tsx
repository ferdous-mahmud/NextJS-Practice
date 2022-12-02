import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <h1>This is Blog Page</h1>
      <ul>
        <li>
          <Link href="/blog/first">First Blog</Link>
        </li>
        <li>
          <Link href="/blog/second">Second Blog</Link>
        </li>
      </ul>
    </div>
  );
}
