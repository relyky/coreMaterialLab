import React, { Fragment } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'
import WithMemo from './WithMemo'

const APP_TITLE = 'FormG07'
const APP_DESCRIPTION = 'useMemo & useCallback'

export default function AppForm() {
    //const [appInfo, meta, setMeta] = useAppInfo()
    //const [formData, { assignValue, assignProps }] = useFormData()

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p> 
            <p>請案【F12】開啟console查看Log中，是否有進行expensive calculations。</p>

        </Fragment>
    )
}
