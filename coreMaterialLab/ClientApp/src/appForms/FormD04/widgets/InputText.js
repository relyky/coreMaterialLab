import React from 'react'

export default function InputText(props) {
    const { name, value, onChange } = props
    return (
        <input type='text'
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.name, e.target.value)}
        />        
    )
}