import { createContext, useReducer } from 'react'
import Reducer from './Reducer'

//TYPES

export type TodosType = {
    userId?: number
    id?: number
    title?: string
    completed?: boolean
}

type FiltersType = {
    text: string,
    checked: boolean,
    selected: number[],

}

export type TodosActionType = {
    type: string,
    payload?: any
};

export type TodosStateType = {

    todos: TodosType[],
    filtered_todos: TodosType[],
    dropdown_list_options: TodosType[],
    set_mobile_navbar: boolean,

    filters: FiltersType,

    dispatch: (action: TodosActionType) => void
};

//


//INITIALSTATE

const initialState: TodosStateType = {
    todos: [],
    filtered_todos: [],
    dropdown_list_options: [],
    set_mobile_navbar: false,

    filters: {
        text: '',
        checked: false,
        selected: [],
    },

    dispatch: () => { },
}

//

const Context = createContext<TodosStateType>(initialState);

export const Provider = ({ children }: { children?: React.ReactNode }): JSX.Element => {

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