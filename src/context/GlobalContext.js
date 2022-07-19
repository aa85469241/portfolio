import React, { createContext, useContext, useReducer } from 'react'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "SWITCH_THEME": {
            return {
                ...state,
                currentTheme: action.theme,
            }
        }
        default: {
            throw new Error(`Undefined action type : ${action.type}`)
        }
    }
}

export const GlobalProvider = ({ children }) => {
    // useReducer
    const [state, dispatch] = useReducer(reducer, {
        currentTheme:
            window.localStorage.getItem('theme') === null
                ? 'light'
                : window.localStorage.getItem('theme'),
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
