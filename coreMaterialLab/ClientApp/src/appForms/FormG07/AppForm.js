import React, { Fragment } from 'react'

import CallbackDemo from './UseCallback/ADemo'
import OrdinaryDemo from './NonCallback/ADemo'

const APP_TITLE = 'FormG07'
const APP_DESCRIPTION = 'useCallback & React.memo()'

export default function AppForm() {
    return (
        <Fragment>
            <h1>{APP_TITLE}</h1>
            <p>{APP_DESCRIPTION} <a href='https://www.youtube.com/watch?v=IL82CzlaCys'>React Hooks Tutorial - 26 - useCallback Hook</a></p>
            <p>請案【F12】開啟console查看Log中，是否有進行expensive calculations。</p>            

            <OrdinaryDemo/>

            <CallbackDemo />

        </Fragment>
    )
}
