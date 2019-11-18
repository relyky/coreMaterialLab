import React, { Fragment, useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import BasicTextFields from './widgets/BasicTextFields'
import ButtonsSample from './widgets/ButtonsSample'

const APP_TITLE = 'FormC03'
const APP_DESCRIPTION = 'Inputs'

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

            <ButtonsSample />
            <BasicTextFields />
        </Fragment>
    )
}



