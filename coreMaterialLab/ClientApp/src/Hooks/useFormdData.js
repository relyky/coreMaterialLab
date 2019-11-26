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

// �A�]��reducer������ϥΪ����O
function useFormDataReducer(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // �]�� dispatch action
    function assignValue(name, value) {
        if (!t(name).isString) throw new Error('Invalid value type!')
        dispatch({ type: 'ASSIGN_VALUE', name, value })
    }

    // �]�� dispatch action
    function assignProps(payload) {
        if (!t(payload).isObject) throw new Error('Invalid value type!')
        dispatch({ type: 'ASSIGN_PROPS', payload })
    }

    // �]�� dispatch action
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

/// ���λ���
// step 1: ��W�h�p App �� AppForm �]�w��´ 
//   <FormDataProvider>
// step 2: ���U�h�Τ��hfunction componnet �s�ΡG
//   const [formData, { assignValue, assignProps }] = useFormData()
