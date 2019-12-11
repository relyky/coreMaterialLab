import React, { Fragment } from 'react'
//import useAppInfo from '../../Hooks/useAppInfo'
//import useFormData from '../../Hooks/useFormdData'
import WithMemo from './WithMemo'

const APP_TITLE = 'FormF06'
const APP_DESCRIPTION = 'useMemo 可以避免在每次 render 都進行昂貴的計算。This optimization helps to avoid expensive calculations on every render.'

export default function AppForm() {
    //const [appInfo, meta, setMeta] = useAppInfo()
    //const [formData, { assignValue, assignProps }] = useFormData()

    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION}</p> 
            <p>請案【F12】開啟console查看Log中，是否有進行expensive calculations。</p>

            <WithMemo />
        </Fragment>
    )
}
