import React, { Fragment, useState, useEffect } from 'react';

const APP_TITLE = 'FormA01'
const APP_DESCRIPTION = 'React-Hooks test, useState, useEffect'

export default function AppForm() {
    const [count, setCount] = useState(87)

    useEffect(() => {
        setCount(13)
    }, [])

    return (
        <Fragment>
            {console.log('count', count)}
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </Fragment>
    )
}
