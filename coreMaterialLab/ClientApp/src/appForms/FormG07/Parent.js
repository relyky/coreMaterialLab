import React, { useState } from 'react'
import ExpensiveChild from './ExpensiveChild'

export default function Parent() {
    const [text, setText] = useState('')

    function handleChange(expensive) {
        
    }

    console.log('render parent')
    return (
        <div style={{ borderStyle: 'solid', borderWidth: 1, padding: '0.5em' }}>
            <h4>Parent</h4>
            <input value={text} onChange={event => setText(event.target.value)} placeholder='text' />

            <ExpensiveChild onChange={handleChange} />
        </div>
    )
}