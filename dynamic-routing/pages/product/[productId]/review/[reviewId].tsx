import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      <h1>Product {productId} Review</h1>
      <h2>Review - {reviewId}</h2>
    </div>
  );
}
