import React, { Fragment, useState, useEffect } from 'react'
import useStore from '../../Hooks/useStore'

const APP_TITLE = 'useStore'
const APP_DESCRIPTION = 'useStore test'

export default function AppForm() {
    const [foo, setFoo] = useStore('foo')
    const [bar, setBar] = useStore('bar')

    console.log('bar', bar)

    const { barValue } = bar || {}

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <p style={{ fontSize: '3em' }}>
                {foo} {barValue}
            </p>
            <hr />
            <input value={foo || ''} onChange={(e) => setFoo(e.target.value)} placeholder="foo" />
            <input value={barValue || ''} onChange={(e) => setBar({ barValue: e.target.value })} placeholder="bar" />
        </Fragment>
    )
}
