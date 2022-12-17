'use client'
import { useState, useMemo, useCallback } from "react"

export default function HomePage() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(0)

    const sumValue1 = () => {
        setValue1(value1 + 1)
    }
    const sumValue2 = () => {
        setValue2(value2 + 1)
    }

    let total = useMemo(() => {
        return value1 + value2
    },[value1, value2])

    let mult = useCallback(() => {
        return value1 * value2
    },[value1, value2] )

    return (
        <div>
            <h1>Home</h1>
            <hr />
            <div>
                <h3>useMemo</h3>
                <p>value 1: {value1}</p>
                <button onClick={sumValue1}>Sum Value 1</button>
                <p>value 2: {value2}</p>
                <button onClick={sumValue2}>Sum Value 2</button>
                <p>Suma: {total}</p>
            </div>
            <hr />
            <div>
                <h3>useCallback</h3>
                <p>Multiplicaion: {mult(value1, value2)}</p>
            </div>
        </div>
           
    
        
        
        
    )
}