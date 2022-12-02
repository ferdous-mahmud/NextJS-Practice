import { useRouter } from "next/router";

export default function ProductDescription() {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Product Description for product {productId}</h1>
      <h3>Page URL = {`/product/${productId}`}</h3>
    </div>
  );
}
