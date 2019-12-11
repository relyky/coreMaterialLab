import React from 'react'

export default React.memo(function Count({ text, count }) {
    console.log(`render Count - ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
})