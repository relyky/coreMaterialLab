import React, { Fragment } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

import TextInputWithFocusButton from './TextInputWithFocusButton'

import FancyInputWithFocusButton from './FancyInputWithFocusButton'

const APP_TITLE = 'FormH08'
const APP_DESCRIPTION = 'useRef & useImperativeHandle +  forwardRef'

export default function AppForm() {

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <TextInputWithFocusButton /><br/>
            <TextInputWithFocusButton /><br/>
            <TextInputWithFocusButton /><br/>

            <FancyInputWithFocusButton /><br />
            <FancyInputWithFocusButton /><br />

        </Fragment>
    )
}
