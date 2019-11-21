import React, { useReducer, createContext, useContext /*, useDebugValue*/ } from 'react'
import t from 'typy'

// ====== useReducer ======

function reducer(state /*dataList*/, action) {
    //console.log('reducer', { action })
    const { type, item, index } = action
    const dataList = state.slice()

    switch (type) {
        case 'ADD_ITEM': {
            // item: object
            dataList.push(item)
            return dataList
        }
        default: {
            throw new Error('invalid action.type!')
        }
    }
}

// �A�]��reducer������ϥΪ����O
function useDataListReducer(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // �]�� dispatch action
    function addItem(item) {
        if (!t(item).isObject) throw new Error('Invalid value type!')
        dispatch({ type: 'ADD_ITEM', item })
    }

    //useDebugValue(state)
    return [state, { addItem }]
}

// ====== createContext ======

const DataListContext = createContext()

export default function useDataList() {
    return useContext(DataListContext)
}

export function FormDataProvider({ children, initialState /* array */}) {
    return (
        <DataListContext.Provider value={useDataListReducer(initialState || [])}>
            {children}
        </DataListContext.Provider>)
}

/// ���λ���
// step 1: ��W�h�p App �� AppForm �]�w��´ 
//   <DataListProvider>
// step 2: ���U�h�Τ��hfunction componnet �s�ΡG
//   const [dataList, actions] = useDataList()
