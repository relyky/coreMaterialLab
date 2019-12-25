import React, { Fragment, useState, useEffect } from 'react'

export default function InputTextWidget({ onSubmit }) {
    const [text, setText] = useState('')

    return (
        <Fragment>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {                
                onSubmit(text)
                setText('')
            }} >Go</button>
        </Fragment>
    )
}
