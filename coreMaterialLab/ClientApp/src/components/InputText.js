import React from 'react'
import t from 'typy'

export default function InputText(props) {
    return (
        <input {...props}
            type='text'
            onChange={e => t(props.onChange).isFunction && props.onChange(props.name, e.target.value)}
        />
    )
}