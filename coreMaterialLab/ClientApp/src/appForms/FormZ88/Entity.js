import React from 'react'

//import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'

export default function Entity({ name }) {
    const [formData] = useFormData()
    const entity = formData[name]
    const { amount, label } = entity

    return (
        <div>
            <h4>{label}</h4>
            <p style={{ fontSize: '2em' }}>{amount}</p>
        </div>
    )
}
