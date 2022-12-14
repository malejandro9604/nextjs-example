import Link from "next/link"
import Image from 'next/image'
import Layout from "../../public/components/layout"
import styles from "../../styles/Transaction.module.css"

export default function Transaction() {
	return (

		<Layout
			title="Transaction"
			description="Description of Transaction"
		>
			<div className={styles.container}>
				<h1>Hello Transactions</h1>
				<Image
					src="/img/transaction.png"
					alt="transaction"
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