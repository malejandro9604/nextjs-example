'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"


export default function ExpensesPage() {
    const router = useRouter();
    const [count, setCount] = useState<number>(0)
    

    useEffect(() => {
        document.title = `you have clicked ${count} times`
    },[count])

    return(
        <div>
            <h1>Hello Expenses</h1>
            <p>amount of click {count}</p><button onClick={() => setCount(count + 1)}>increment counter</button>
            
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