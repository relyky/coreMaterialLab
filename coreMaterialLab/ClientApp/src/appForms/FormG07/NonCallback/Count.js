import React from 'react'

export default function Count({ text, count }) {
    console.log(`render Count - ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}