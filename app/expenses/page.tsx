'use client';
import { useRouter } from "next/navigation";
import Image from "next/image"

export default function Expenses() {
    const router = useRouter();
    return(
        <div>
            <h1>Hello Expenses</h1>
            <Image
                src="/img/expenses.png"
                alt="expenses"
                width={300}
                height={300}
            />
            <br />
            <button type="button" onClick={() => router.push('/')} >Back</button>
        </div>
    );
}