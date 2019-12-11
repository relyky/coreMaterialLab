import React, { Fragment, useRef  } from 'react'

export default function TextInputWithFocusButton() {
    const inputEl = useRef()

    function handleClick() {
        // `current` points to the mounted text input element
        inputEl.current.focus()
    }

    return (
        <Fragment>
            <input ref={inputEl} type="text" />
            <button onClick={handleClick}>Focus the input</button>
        </Fragment>
    )
}