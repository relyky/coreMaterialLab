import React, { useState, useMemo } from 'react'
import t from 'typy'

export default function ExpensiveChild({ onChange }) {
    const [count, setCount] = useState(5)

    function expensiveCalculate(count, tag) {
        console.log('compute', { count, tag })
        let sum = 0
        for (let i = 0; i < count * 100; i++) {
            sum += i
        }
        return sum;
    }

    //const expensive = expensiveCalculate(count, '')
    const expensive = useMemo(() => expensiveCalculate(count, 'M'), [count])

    console.log('render children')
    return (
        <div style={{ borderStyle: 'solid', borderWidth: 1, padding: '0.5em' }}>
            <h4>Child</h4>
            <dl>
                <dt>count</dt><dd>{count}</dd>
                <dt>expensive</dt><dd>{expensive}</dd>
            </dl>
            {t(onChange).isFunction && onChange(expensive)}
        </div>
    )
}