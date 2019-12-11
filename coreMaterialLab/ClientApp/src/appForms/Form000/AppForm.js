import React, { Fragment, useState, useEffect } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

const APP_TITLE = 'Say hi'
const APP_DESCRIPTION = '歡迎光臨。'

export default function AppForm() {
    const [myName, setMyName] = useState('')

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
            <hr />
            <input value={myName} onChange={handleEvent} />
        </Fragment>
    )
}
