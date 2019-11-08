import React, { Fragment, useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'

const APP_TITLE = 'FormA01 倒數計時器與“怪奇現象”'
const APP_DESCRIPTION = 'React-Hooks test, useState, useEffect'

export default function AppForm() {
    const [count, setCount] = useState(87)

    useEffect(() => {
        console.log('useEffect', count)
        handleReset()
    }, []) // 等同 componentDidMount

    useEffect(() => {
        console.log('useEffect 設定計時器', count)
        const timer = setInterval(handleInterval, 1000)

        // 此return將於unmount時觸發，可用於釋放資源，如：timer。
        return () => clearInterval(timer) 
    }, []); // 等同 componentDidMount

    function handleInterval() {
        console.log('interval', count) // 這個 count
        setCount(count => count - 1)  // 與這個 count 不是同一個 count
    }

    function handleDecrease() {
        console.log('--', count)
        setCount(count - 1)
    }

    function handleIncrease() {
        console.log('++', count)
        setCount(count + 1)
    }

    function handleReset() {
        // reset
        setCount(29)
    }

    return (
        <Fragment>
            {console.log('render', count)}
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            <p>請案【F12】開啟console查看Log中奇怪的現象。</p>

            <h4>{count}</h4>
            <Button variant="contained" color="primary" onClick={handleIncrease}>
                Increase
            </Button>&nbsp;
            <Button variant="contained" color="primary" onClick={handleDecrease}>
                Decrease
            </Button>&nbsp;
            <Button variant="contained" color="secondary" onClick={handleReset}>
                reset
            </Button>
        </Fragment>
    )
}
