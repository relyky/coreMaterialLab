import React, { createContext, useState , useContext, /*, useDebugValue*/  } from 'react'

const AppInfoContext = createContext()

export default function useAppInfo() {
    return useContext(AppInfoContext)
}

export function AppInfoProvider({ children, appInfo /* object */ }) {
    const [meta, setMeta] = useState({})
    return (
        <AppInfoContext.Provider value={[appInfo, meta, setMeta]}>
            {children}
        </AppInfoContext.Provider>)
}