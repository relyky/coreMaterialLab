import React, { Fragment } from 'react'
//import Typography from '@material-ui/core/Typography';
//import Box from '@material-ui/core/Box'

import ButtonsSample from './widgets/ButtonsSample'

const APP_TITLE = 'FormC03'
const APP_DESCRIPTION = 'Inputs'

export default function AppForm() {    
    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <ButtonsSample />

        </Fragment>
    )
}



