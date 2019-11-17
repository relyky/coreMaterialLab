import React, { useReducer, createContext, useContext, useDebugValue } from 'react'

// ====== useReducer ======

function reducer(state /*formData*/, action) {
    //console.log('reducer', { action })
    const { type, payload, name, value } = action

    switch (type) {
        case 'ASSIGN_VALUE': {
            // name: string
            // value: any 
            return { ...state, [name]: value }
        }
        case 'ASSIGN_PROPS': {
            // payload: object
            return { ...state, ...payload }
        }
    }

    throw new Error('invalid action.type!')
}

// 再包裝reducer成更易使用的指令
function useFormDataReducer(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // 包裝 dispatch action
    function assignValue(name, value) {
        dispatch({ type: 'ASSIGN_VALUE', name, value })
    }

    // 包裝 dispatch action
    function assignProps(payload) {
        dispatch({ type: 'ASSIGN_PROPS', payload })
    }

    return [state, { assignValue, assignProps }]
}

// ====== createContext ======

const FormDataContext = createContext()

export default function useFormData() {
    return useContext(FormDataContext)
}

export function FormDataProvider({ children, initialState }) {
    return (
        <FormDataContext.Provider value={useFormDataReducer(initialState)}>
            {children}
        </FormDataContext.Provider>)
}

/// 應用說明
// step 1: 於上層如 App 或 AppForm 設定組織 
//   <FormDataProvider>
// step 2: 於其下層或內層function componnet 叫用：
//   const [formData, { assignValue, assignProps }] = useFormData()
