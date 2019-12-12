import React, { useRef, useImperativeHandle } from 'react'

export default React.forwardRef(function FancyInput(props, ref) {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        changeType: (type) => {
            console.log('changeType', type)
            inputRef.current.type = type
        },
        getType: () => {
            return inputRef.current.type
        }
    }));

    return (
        <input {...props} ref={inputRef} placeholder={inputRef.current.type} />
    )
})
