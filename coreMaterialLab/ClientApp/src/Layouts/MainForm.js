import React, { useState } from 'react'
import useAppInfo, { AppInfoProvider } from '../Hooks/useAppInfo'
import { FormDataProvider } from '../Hooks/useFormdData'

export default function MainForm({ children }) {
    const [appInfo] = useState({
        userId: 'USER_ID',
        userName: 'USER_NAME'
    })

    return (
        <AppInfoProvider appInfo={appInfo}>
            <FormDataProvider>
                {children}
            </FormDataProvider>
        </AppInfoProvider>
    )
}

export { useAppInfo }

