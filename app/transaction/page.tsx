import Image from "next/image"
import { ListTransaction } from "./ListTransaction"


export default function TransactionPage() {
    return(
        <div>
            <h1>Hello Transactions</h1>
            <Image
                src="/img/transaction.png"
                alt="transaction"
                width={300}
                height={300}
            />
            <br />
            <ListTransaction />
        </div>
    )
}