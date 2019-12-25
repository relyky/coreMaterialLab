import React, { Fragment, useState, useEffect } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

import { useSessionStorage } from '../../Hooks/useWindowResource'

import InputTextWidget from './InputTextWidget'

const APP_TITLE = 'FormS10 useSessionStorage'
const APP_DESCRIPTION = '試實作useSessionStorage。'

export default function AppForm() {
    const [foo, setFoo] = useSessionStorage('foo', 'foo')
    const [bar, setBar] = useSessionStorage('bar', 123)
    const [baz, setBaz] = useSessionStorage('baz', { a: 'abc', num: 987654321, itemList: [1, 2, 3, 4, 5, 6] })

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <hr />
            <label>Foo text</label>
            <p>{foo}</p>
            <InputTextWidget onSubmit={(text) => setFoo(text)} />

            <hr/>
            <label>Bar number</label>
            <p>{bar}</p>
            <InputTextWidget onSubmit={(text) => setBar(text)} />

            <hr />
            <label>Baz object</label>
            <p>{JSON.stringify(baz)}</p>
            <InputTextWidget onSubmit={(text) => setBaz({bazValue: text, note:'show me the money.'})} />

        </Fragment>
    )
}
