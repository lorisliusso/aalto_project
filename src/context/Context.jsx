import { createContext, useReducer } from 'react'
import Reducer from './Reducer'

const Context = createContext()

export const Provider = ({ children }) => {

    const initialState = {
        todos: [],
        filtered_todos: [],
        dropdown_list_options: [],
        set_mobile_navbar: false,

        filters: {
            text: '',
            checked: false,
            selected: [],
        },
    }

    const [state, dispatch] = useReducer(Reducer, initialState)

    return (

        <Context.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>

    )
}

export default Context;