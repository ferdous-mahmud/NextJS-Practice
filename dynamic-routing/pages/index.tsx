import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>This is Homepage</h1>
      <ul>
        <li>
          <Link href="/product">Product</Link>
        </li>
      </ul>
    </div>
  );
}
