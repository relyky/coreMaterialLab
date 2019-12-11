import React from 'react'

export default function Button({ onClick, children }) {
    console.log(`render Button - ${children}`)
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}