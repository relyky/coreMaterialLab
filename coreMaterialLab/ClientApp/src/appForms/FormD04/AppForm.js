import React, { Fragment, useState, useEffect } from 'react'
import useFormData from '../../Hooks/useFormdData'
import InputText from './widgets/InputText'

const APP_TITLE = 'FormD04'
const APP_DESCRIPTION = 'FormData Lab'

export default function AppForm() {
    const [formData, { assignValue, assignProps }] = useFormData()

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>

            <p style={{ fontSize: '3em' }}>{`你好，我的名字是${formData.myName||''}。`}</p>

            <hr />
            <InputText name='myName' value={formData.myName||''} onChange={assignValue} />
        </Fragment>
    )
}
