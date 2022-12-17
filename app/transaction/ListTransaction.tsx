import { LikeButton } from "./LikeButton"
import Link from "next/link"
//import { resolve } from "path"

const fetchTransaction = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
    //throw new Error('Error loading transactions')
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export async function ListTransaction() {
    const transactions = await fetchTransaction()
    return transactions.slice(0, 5).map(transaction => (
        <article>
            <Link href={`/transaction/${transaction.id}`}>
                <h2>{ transaction.id } {transaction.title}</h2>
            </Link>
            <p>{ transaction.body }</p>
            <LikeButton />
        </article>
    ))
}