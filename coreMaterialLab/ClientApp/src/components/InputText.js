import React from 'react'
import t from 'typy'

export default React.forwardRef(
function InputText(props, ref) {
    return (
        <input {...props}
            ref={ref} 
            type='text'
            onChange={e => t(props.onChange).isFunction && props.onChange(props.name, e.target.value)}
        />
    )
})
