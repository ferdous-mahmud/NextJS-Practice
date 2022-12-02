import Link from "next/link";

export default function Product() {
  return (
    <div>
      <h1>This is Product page</h1>
      <h3>
        <Link href="/product/1">Product-1</Link>
      </h3>
      <h3>
        <Link href="/product/2">Product-2</Link>
      </h3>
      <h3>
        <Link href="/product/3">Product-3</Link>
      </h3>
    </div>
  );
}
