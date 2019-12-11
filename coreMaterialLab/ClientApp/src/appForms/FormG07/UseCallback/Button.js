import React from 'react'

export default React.memo(function Button({ onClick, children }) {
    console.log(`render Button - ${children}`)
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
})