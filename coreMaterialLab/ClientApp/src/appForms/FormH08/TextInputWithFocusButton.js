import React, { Fragment, useRef } from 'react'
import InputText from '../../components/InputText';

export default function TextInputWithFocusButton() {
    const inputEl = useRef()

    function handleClick() {
        // `current` points to the mounted text input element
        console.log('inputEl', inputEl)
        inputEl.current.focus()
    }

    return (
        <Fragment>
            <InputText ref={inputEl} type="text" placeholder="InputText" />
            <button onClick={handleClick}>Focus the input</button>
        </Fragment>
    )
}