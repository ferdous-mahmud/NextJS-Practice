import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Going back.......");
    router.push("/");
  };

  return (
    <div>
      <button onClick={handleClick}>Go Back</button>
      <h1>Product 1</h1>
      <h1>Product 2</h1>
      <h1>Product 3</h1>
      <h1>Product 4</h1>
      <h1>Product 5</h1>
    </div>
  );
}
