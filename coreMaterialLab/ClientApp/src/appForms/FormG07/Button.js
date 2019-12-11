import React from 'react'

function Button({ onClick, children }) {
    console.log(`render Button - ${children}`)
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default React.memo(Button)