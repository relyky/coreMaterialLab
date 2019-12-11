import React from 'react'

export default React.memo(function Title() {
    console.log('render Title - useCallback Hook')
    return (
        <h2>
            useCallback Hook
        </h2>
    )
})
