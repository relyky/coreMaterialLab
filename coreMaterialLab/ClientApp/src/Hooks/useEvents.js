import { useState, useEffect, useDebugValue } from 'react'
import t from 'typy'

export function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    function handleMouseMove(e) {
        setPosition({ x: e.pageX, y: e.pageY })
    }

    useDebugValue(position)
    return position
}

//====================

export function useWindowSize() {
    const [size, setSize] = useState({ w: 0, h: 0 })

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, []) // 等同 componentDidMount

    function handleResize(e) {
        setSize({ w: e.target.innerWidth, h: e.target.innerHeight})
    }

    useDebugValue(size)
    return size
}

//====================
//useInterval(() => {
//    setCount(currentCount => currentCount + 1);
// delay);

export function useInterval(onInterval, dealy) {
    if (!t(onInterval).isFunction) throw new Error('Invalid value type!')
    if (!t(dealy).isNumber) throw new Error('Invalid value type!')

    useEffect(() => {
        const timer = setInterval(() => onInterval(), dealy)
        return () => clearInterval(timer)
    }, [dealy]); // 等同 componentDidMount
}
