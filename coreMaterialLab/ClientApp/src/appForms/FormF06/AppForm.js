import React, { Fragment, useEffect } from 'react'
import useAppInfo from '../../Hooks/useAppInfo'
import useFormData from '../../Hooks/useFormdData'

const APP_TITLE = 'FormF06'
const APP_DESCRIPTION = 'useMemo & useCallback'

export default function AppForm() {
    const [appInfo, meta, setMeta] = useAppInfo()
    const [formData, { assignValue, assignProps }] = useFormData()

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p> 
        </Fragment>
    )
}
