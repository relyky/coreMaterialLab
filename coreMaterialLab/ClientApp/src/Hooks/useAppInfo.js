import React, { createContext, useContext /*, useDebugValue*/ } from 'react'

const AppInfoContext = createContext()

export default function useAppInfo() {
    return useContext(AppInfoContext)
}

export function AppInfoProvider({ children, appInfo /* object */ }) {
    return (
        <AppInfoContext.Provider value={appInfo}>
            {children}
        </AppInfoContext.Provider>)
}