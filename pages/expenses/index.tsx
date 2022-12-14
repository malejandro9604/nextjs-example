import Link from "next/link";
import Image from "next/image";
import Layout from "../../public/components/layout";
import styles from "../../styles/Expenses.module.css"

export default function Expenses() {
	return (

		<Layout
			title="Expenses"
			description="Description of Expenses"
		>
			<div className={styles.container}>
				<h1>Hello Expenses</h1>
				<Image
					src="/img/expenses.png"
					alt="expenses"
					width={270}
					height={175}
				/>
				<br />
				<Link href="/">
					Back
				</Link>
			</div>
		</Layout>

	)
}