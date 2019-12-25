import { useMemo, useState, useEffect } from 'react'
import t from 'typy'

//=============================================================================
/// 應用範例
/// const [foo, setFoo] = useSessionStorage('foo')
/// const [entity, setEntity] = useSessionStorage('entity', { a:'str', b:987654321, list:[1,2,3,4,5,6] })

export function useSessionStorage(key /*string*/, initValue /*string | number | object | null | undefined */) {
    if (!t(key).isString) throw new Error('Invalid value type!')
    if (!(t(initValue).isNullOrUndefined || t(initValue).isNumber || t(initValue).isString || t(initValue).isObject)) throw new Error('Invalid value type!')

    const [changed, setChanged] = useState(false) // to indicate the "sessionStorage value" has changed.

    useState(() => {
        //console.log('useSessionStorage.init', window.sessionStorage.getItem(key))
        if (initValue !== undefined && window.sessionStorage.getItem(key) === null) {
            /// 若是物件則轉成JSON字串，因為sessionStorage只能存字串。
            if (typeof initValue === 'object') {
                window.sessionStorage.setItem(key, JSON.stringify(initValue))
            } else {
                window.sessionStorage.setItem(key, initValue)
            }
        }
    })

    function setValue(newValue /*string|number|object*/) {
        if (!(t(initValue).isNull || t(initValue).isNumber || t(initValue).isString || t(initValue).isObject)) throw new Error('Invalid value type!')

        //console.log('useSessionStorage.setValue', key, newValue)
        /// 若是物件則轉成JSON字串，因為sessionStorage只能存字串。
        if (typeof newValue === 'object') {
            window.sessionStorage.setItem(key, JSON.stringify(newValue))
            setChanged(!changed)
        } else {
            window.sessionStorage.setItem(key, newValue)
            setChanged(!changed)
        }
    }

    function getValue() {
        const value = window.sessionStorage.getItem(key)
        //console.log('useSessionStorage.getValue', key, value)        
        try {
            /// 解析JSON字串
            return JSON.parse(value)
        } catch (ex) {
            /// 若不是JSON字串，就是一般的字串
            return value
        }
    }

    const value = useMemo(getValue, [changed])
    return [value, setValue]
}

//=============================================================================
/// 應用範例
/// const position = useWindowSize()

export function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    function handleMouseMove(e) {
        setPosition({ x: e.pageX, y: e.pageY })
    }

    //useDebugValue(position)
    return position
}

//=============================================================================
/// 應用範例
/// const size = useWindowSize()

export function useWindowSize() {
    const [size, setSize] = useState({ w: 0, h: 0 })

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []) // 等同 componentDidMount

    function handleResize(e) {
        setSize({ w: e.target.innerWidth, h: e.target.innerHeight })
    }

    //useDebugValue(size)
    return size
}

//=============================================================================
/// 應用範例
/// useInterval(() => {
///    setCount(currentCount => currentCount + 1);
/// }, delay);

export function useInterval(onInterval, dealy) {
    if (!t(onInterval).isFunction) throw new Error('Invalid value type!')
    if (!t(dealy).isNumber) throw new Error('Invalid value type!')

    useEffect(() => {
        const timer = setInterval(() => onInterval(), dealy)
        return () => clearInterval(timer)
    }, [dealy]); // 等同 componentDidMount
}

//=============================================================================