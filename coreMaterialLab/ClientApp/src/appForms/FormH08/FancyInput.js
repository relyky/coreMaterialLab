import React, { useRef, useImperativeHandle, Fragment } from 'react'

export default React.forwardRef(function FancyInput(props, ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        changeType: (type) => {
            console.log('changeType', type)
            inputRef.current.type = type
            inputRef.current.placeholder = type
        },
        getType: () => {
            return inputRef.current.type
        }
    }));

    const inputType = (inputRef.current) ? inputRef.current.type : ''
    console.log('inputType', inputType)
    return (
        <Fragment>
            <input {...props} ref={inputRef} placeholder={inputType} />
        </Fragment>
    )
})
