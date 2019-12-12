import React, { useState, createContext, useContext } from 'react'
import t from 'typy'

// ====== createContext ======
const StoreContext = createContext()

//# Context.Provider
export function StoreProvider({ children, initialStore /* object */ }) {
    const [store, setStore] = useState(initialStore || {})
    return (
        <StoreContext.Provider value={[store, setStore]}>
            {children}
        </StoreContext.Provider>)
}

//# Context.Consumer
export default function useStore(namespace) {
    if (!t(namespace).isString) throw new Error('Invalid value type!')

    const [store, setStore] = useContext(StoreContext)

    function setState(state) {
        setStore({ ...store, [namespace]: state })
    }

    const state = store[namespace] || null

    return [state, setState]
}
