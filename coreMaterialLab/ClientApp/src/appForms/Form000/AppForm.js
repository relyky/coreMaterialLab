﻿import React, { Fragment, useState, useEffect } from 'react'

//import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'

const APP_TITLE = 'Say hi'
const APP_DESCRIPTION = '歡迎光臨。'

export const initialFormData = { foo: 'foo', bar: 987654321 }

export default function AppForm() {
    const [myName, setMyName] = useState('')
    const [formData, { assignValue, assignProps }] = useFormData()

    useEffect(() => {
        setMyName('somebody')
    }, []) // 等同 componentDidMount

    function handleEvent(e) {
        setMyName(e.target.value)
    }

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <p style={{ fontSize: '3em' }}>{`你好，我的名字是${myName}。`}</p>
            <pre style={{ fontSize: '3em' }}>formData: {JSON.stringify(formData)}</pre>
            <hr />
            <input value={myName} onChange={handleEvent} />
        </Fragment>
    )
}
