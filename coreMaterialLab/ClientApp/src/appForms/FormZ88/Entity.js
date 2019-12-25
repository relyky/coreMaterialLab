import React, { Fragment, useState } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'

import { useInterval } from '../../Hooks/useEvents'

export default function Entity({ label }) {
    const [amount, setAmount] = useState(1000)

    useInterval(() => {
        setAmount(amount => setAmount(amount + 1))
    }, 1000)

    return (
        <Fragment>
            <h4>{label}</h4>
            <p style={{fontSize:'2em'}}>{amount}</p>
        </Fragment>
    )
}
