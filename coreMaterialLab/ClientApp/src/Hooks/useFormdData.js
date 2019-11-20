import React, { useReducer, createContext, useContext /*, useDebugValue*/ } from 'react'

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
        dispatch({ type: 'ASSIGN_VALUE', name, value })
    }

    // �]�� dispatch action
    function assignProps(payload) {
        dispatch({ type: 'ASSIGN_PROPS', payload })
    }

    //useDebugValue(state)
    return [state, { assignValue, assignProps }]
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
