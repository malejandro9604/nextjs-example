import Link from "next/link"
import Image from 'next/image'
import Layout from "../../public/components/layout"
import styles from "../../styles/Transaction.module.css"

export default function Transaction({ data }) {
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
			{
				data.map(({ id, title, body }) => (
					<div key={id}>
						<h3>
							<Link href={`/transaction/${id}`}>
								{id} - {title}
							</Link>
						</h3>
						<p>{body}</p>
					</div>
				))
			}
		</Layout>

	)
}

export async function getStaticProps() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data = await res.json()
		return {
			props: {
				data
			}
		}
	} catch (error) {
		console.log(error)
	}
}