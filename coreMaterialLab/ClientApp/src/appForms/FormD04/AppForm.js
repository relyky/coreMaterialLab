﻿import React, { Fragment, useEffect } from 'react'
import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'
import { InputText, InputButton } from './widgets/InputText'

const APP_TITLE = 'FormD04'
const APP_DESCRIPTION = 'FormData Lab'

export default function AppForm() {
    const [appInfo, /*meta*/, setMeta] = useAppInfo()
    const [formData, { assignValue, assignProps }] = useFormData()

    useEffect(() => {
        assignProps({
            firstName: '美女',
            lastName: '甄',
            age: 19
        })
    }, [])

    function handleBlockUI() {
        setMeta({ f_blocking: true })
        setTimeout(() => {
            // to trigger <Layout> to blockUI
            setMeta({ f_blocking: false })            
        }, 2000)
    }

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            <p>{JSON.stringify(appInfo, null, '  ')}</p>

            <p style={{ fontSize: '3em' }}>{`大家好。我的姓名是${formData.lastName}${formData.firstName}，今年${formData.age}歲。`}</p>

            <hr />
            <InputText name='firstName' label="First Name"
                value={formData.firstName}
                onChange={assignValue} />

            <InputText name='lastName' label="Last Name"
                value={formData.lastName}
                onChange={assignValue} />

            <InputText name='age' label="Age"
                value={formData.age}
                onChange={assignValue} />

            <hr />
            <InputButton color="primary" onClick={handleBlockUI}>
                確認
            </InputButton>
        </Fragment>
    )
}
