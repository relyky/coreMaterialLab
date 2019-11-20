import React, { Fragment, useEffect } from 'react'
import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'
import InputText from './widgets/InputText'

const APP_TITLE = 'FormD04'
const APP_DESCRIPTION = 'FormData Lab'

export default function AppForm() {
    const appInfo = useAppInfo()
    const [formData, { assignValue, assignProps }] = useFormData()

    useEffect(() => {
        assignProps({
            myName: 'somebody',
            foo:'foo'
        })
    },[])

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p>
            <p>{JSON.stringify(appInfo,null,'  ')}</p>

            <p style={{ fontSize: '3em' }}>{`你好，我的名字是${formData.myName}。`}</p>
            <p style={{ fontSize: '3em' }}>{`foo ${formData.foo}。`}</p>

            <hr />
            <InputText name='myName' value={formData.myName} onChange={assignValue} />
            <InputText name='foo' value={formData.foo} onChange={assignValue} />
        </Fragment>
    )
}
