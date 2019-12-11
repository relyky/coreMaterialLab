import React, { useState, useMemo } from 'react'

export default function WithMemo() {
    const [count, setCount] = useState(1)
    const [val, setValue] = useState('')

    function expensiveCalculate(count,flag) {
        console.log('compute', { count, flag })
        let sum = 0
        for (let i = 0; i < count * 100; i++) {
            sum += i
        }
        return sum;
    }

    const expensive = expensiveCalculate(count,'')
    const expensiveMemo = useMemo(() => expensiveCalculate(count, 'M'), [count])

    console.log('render')
    return (
        <div style={{ borderStyle: 'solid', borderWidth:1, padding:'0.5em' }}>

            <h4>{count} - {expensive} - {expensiveMemo}</h4>
            <span>{val}</span>

            <div>
                <button onClick={() => setCount(count + 1)}>Count</button>
                <input value={val} onChange={event => setValue(event.target.value)} placeholder='val' />
            </div>
        </div>
    )
}