import Link from "next/link";

export default function ProductReview() {
  return (
    <div>
      <h1>Product Review page</h1>
      <ul>
        <li>
          <Link href="/product/1/review/1">Review 1</Link>
        </li>
        <li>
          <Link href="/product/1/review/2">Review 2</Link>
        </li>
        <li>
          <Link href="/product/2/review/2">Product 2 Review 2</Link>
        </li>
      </ul>
    </div>
  );
}
