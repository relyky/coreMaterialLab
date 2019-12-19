import React, { Fragment, useRef } from 'react'
import FancyInput from './FancyInput'

export default function FancyInputWithFocusButton() {
    const inputEl = useRef()

    function handleClick() {
        // `current` points to the mounted text input element
        inputEl.current.focus()
    }

    function handleChangeType() {
        console.log('handleChangeType', inputEl.current)
        const type = inputEl.current.getType()
        inputEl.current.changeType(type === 'text' ? 'date' : 'text')
    }

    return (
        <Fragment>
            <FancyInput ref={inputEl} type="date" />
            <button onClick={handleClick}>Focus the input</button>
            <button onClick={handleChangeType}>ChangeType</button>
        </Fragment>
    )
}