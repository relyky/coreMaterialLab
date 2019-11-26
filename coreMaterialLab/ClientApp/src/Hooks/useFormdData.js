import React, { useReducer, createContext, useContext /*, useDebugValue*/ } from 'react'
import t from 'typy'

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
            // paylaod: object
            return { ...state, ...payload }
        }
        case 'ADD_ITEM2': {
            // name: string
            // paylaod: object
            const itemList = t(state[name]).isArray ? state[name].slice() : []
            itemList.push(payload)
            console.log('ADD_ITEM2', payload);
            return { ...state, [name]: itemList }
        }
        default: {
            throw new Error('invalid action.type!')
        }
    }
}

// 再包裝reducer成更易使用的指令
function useFormDataReducer(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // 包裝 dispatch action
    function assignValue(name, value) {
        if (!t(name).isString) throw new Error('Invalid value type!')
        dispatch({ type: 'ASSIGN_VALUE', name, value })
    }

    // 包裝 dispatch action
    function assignProps(payload) {
        if (!t(payload).isObject) throw new Error('Invalid value type!')
        dispatch({ type: 'ASSIGN_PROPS', payload })
    }

    // 包裝 dispatch action
    function addItem2(name, payload) {
        if (!t(name).isString) throw new Error('Invalid value type!')
        if (!t(payload).isObject) throw new Error('Invalid value type!')
        dispatch({ type: 'ADD_ITEM2', name, payload })
    }

    //useDebugValue(state)
    return [state, { assignValue, assignProps, addItem2 }]
}

// ====== createContext ======

const FormDataContext = createContext()

export default function useFormData() {
    return useContext(FormDataContext)
}

export function FormDataProvider({ children, initialState /* object */}) {
    return (
        <FormDataContext.Provider value={useFormDataReducer(initialState || {})}>
            {children}
        </FormDataContext.Provider>)
}

/// 應用說明
// step 1: 於上層如 App 或 AppForm 設定組織 
//   <FormDataProvider>
// step 2: 於其下層或內層function componnet 叫用：
//   const [formData, { assignValue, assignProps }] = useFormData()
