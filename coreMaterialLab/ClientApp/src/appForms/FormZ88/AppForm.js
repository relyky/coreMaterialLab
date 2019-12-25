import React, { Fragment } from 'react'
import Entity from './Entity'

//import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'
import { useInterval } from '../../Hooks/useWindowResource'

const APP_TITLE = 'FormZ88 交易'
const APP_DESCRIPTION = '交易'

export const initialFormData = {
    people: {
        label: '人口',
        amount: 10000
    },
    food: {
        label: '食物',
        amount: 10000
    }
}

export default function AppForm() {
    const [formData, { assignProps }] = useFormData()

    useInterval(() => {
        txn('food', -3, 'people', 5)
    }, 1500)

    function txn(A, dA, B, dB) {
        formData[A].amount = formData[A].amount + dA
        formData[B].amount = formData[B].amount + dB
        assignProps({
            [A]: { ...formData[A] },
            [B]: { ...formData[B] }
        })
    }

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            
            <Entity name='people' />
            <Entity name='food' />
        </Fragment>
    )
}
