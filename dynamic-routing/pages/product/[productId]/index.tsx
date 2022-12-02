import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter(); // router for fetching route
  const productID = router.query.productId; // productId = [filename].tsx

  const reviewURL = "/product/" + productID + "/review/1";

  return (
    <div>
      <h1>Details about product</h1>
      <h2>Product ID - {productID}</h2>
      <li>
        <Link href={reviewURL}>Review - 1</Link>
      </li>
    </div>
  );
}
