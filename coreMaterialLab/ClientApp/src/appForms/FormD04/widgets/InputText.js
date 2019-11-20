import React, { Fragment } from 'react'

export default function InputText(props) {
    const { name, value, onChange, label } = props
    return (
        <Fragment>
            <label>{label}</label>
            <input type='text'
                name={name}
                value={value || ''}
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
        </Fragment>
    )
}