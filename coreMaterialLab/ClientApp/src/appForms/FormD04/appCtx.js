import React, { useState, useEffect } from 'react'
import { AppInfoProvider } from '../../Hooks/useAppInfo'
import { FormDataProvider } from '../../Hooks/useFormdData'

import AppForm from './AppForm'

export default function appCtx() {
    const [appInfo] = useState({
        userId: 'USER_ID',
        userName: 'USER_NAME'
    })

    return (
        <AppInfoProvider appInfo={appInfo}>
            <FormDataProvider>
                <AppForm />
            </FormDataProvider>
        </AppInfoProvider>
    )
}
