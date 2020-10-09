import { useState, useEffect, useCallback, useMemo } from 'react'

export const useLocalStorage = <T>(key: string, initialState: T) => {
    const [state, setState] = useState(() => {
        return window.localStorage.getItem(key) ?? JSON.stringify(initialState)
    })

    useEffect(() => {
        const updateState = () => {
            setState(window.localStorage.getItem(key) ?? JSON.stringify(initialState))
        }

        updateState()
        
        window.addEventListener('storage', updateState)

        return () => {
            window.removeEventListener('storage', updateState)
        }

    }, [key, initialState])

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    const value = useMemo(() => JSON.parse(state), [state])
    const setter = useCallback((value: T) => {
        setState(JSON.stringify(value))
    }, [])

    return [value, setter]
}