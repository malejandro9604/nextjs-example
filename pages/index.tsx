import Link from "next/link";
import Layout from "../public/components/layout";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (

    <Layout
      title="Home"
      description="Description of Home"
    >
      <div className={styles.container}>
        <h1>Home</h1>
        <ul>
          <li>
            <Link href="/expenses">
              Expenses
            </Link>
          </li>
          <li>
            <Link href="/transaction">
              Transactions
            </Link>
          </li>
        </ul>
      </div>
    </Layout>

  );
}
