import React, { Fragment, useState, useEffect } from 'react'
import InputText from '../../components/InputText'
import useMyEffect from './useMyEffect'
import MyEffectWidget from './MyEffectWidget'

const APP_TITLE = 'useEffect'
const APP_DESCRIPTION = 'useEffect Lab'

export default function AppForm() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)
    const [d, setD] = useState(0)

    const [text, setText] = useState('')

    useEffect(() => {
        setA(a => a + 1)
    },[]) // <--- 不加 dependency array 會出錯。Maximum update depth exceeded

    useEffect(() => {
        setB(b => b + 1)
    }, [])

    useEffect(() => {
        setC(c => c + 1)
    }, [a, b, text])

    useMyEffect(() => {
        setD(d => d + 1)
    }, [a, b, text])

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            <p style={{ fontSize: '2em' }}>useEffect(effect:Lamda, deps:Array)</p>

            <dl>
                <dt>a:useEffect(,)</dt><dd>{a}</dd><dd><span style={{ color: 'pink' }}>這是exception</span></dd>
                <dt>b:useEffect(,[])</dt><dd>{b}</dd>
                <dt>c:useEffect(,[a,b,text])</dt><dd>{c}</dd>
                <dt>d:useMyEffect(,[a,b,text])</dt><dd>{d}</dd>
            </dl>

            <MyEffectWidget
                name="widget01"
                text={text}
            />

            <hr />

            <InputText name='text' onChange={(name, value) => setText(value)} placeholder='text' />
        </Fragment>
    )
}
