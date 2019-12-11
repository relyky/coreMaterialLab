import React from 'react'

function Count({text, count }) {
    console.log(`render Count - ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)