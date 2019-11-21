import React, { Fragment, useEffect } from 'react'
import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'
import InputText from '../FormD04/widgets/InputText'

export default function DataView01() {
    const appInfo = useAppInfo()
    const [formData, { assignValue, assignProps }] = useFormData()

    useEffect(() => {

        assignProps({
            firstName: '依林',
            lastName: '蔡',
            age: 19
        })
    }, [])

    return (
        <Fragment>
            <pre>AppInfo: {JSON.stringify(appInfo, null, '  ')}</pre>

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
        </Fragment>
    )
}
