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

// 再包裝reducer成更易使用的指令
function useDataListReducer(initialState) {
    const [state, dispatch] = useReducer(reducer, initialState)

    // 包裝 dispatch action
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

/// 應用說明
// step 1: 於上層如 App 或 AppForm 設定組織 
//   <DataListProvider>
// step 2: 於其下層或內層function componnet 叫用：
//   const [dataList, actions] = useDataList()
