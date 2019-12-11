import React from 'react'

function Title() {
    console.log('Title.render')
    return (
        <h2>
            useCallback Hook
        </h2>
    )
}

export default React.memo(Title)
