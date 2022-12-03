import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Place order successful");
    router.push("/product");
  };

  return (
    <div className={styles.container}>
      <h1>This is Homepage</h1>
      <li>
        <Link href="/error/userError">User Error</Link>
      </li>
      <li>
        <Link href="/error/defaultError">Default Error</Link>
      </li>
      <button onClick={handleClick} className="myButton">
        Place Order
      </button>
    </div>
  );
}
