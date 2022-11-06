import { TodosStateType, TodosActionType } from './Context';


const Reducer = (state: TodosStateType, action: TodosActionType): TodosStateType => {

    switch (action.type) {

        case 'GET_TODOS':
            return {
                ...state,
                todos: action.payload,
                filtered_todos: action.payload,
                dropdown_list_options: action.payload,
            }

        case 'FILTERED_TODOS':
            return {
                ...state,
                filtered_todos: action.payload,
                dropdown_list_options: action.payload,
            }

        case 'FILTERED_TODOS-KEEPLIST':
            return {
                ...state,
                filtered_todos: action.payload.todos_data,
                dropdown_list_options: action.payload.dropdown_list,
            }

        case 'SAVE-INPUT-TEXT':
            return {
                ...state,
                filters: { ...state.filters, text: action.payload }
            }

        case 'SAVE-CHECKED':
            return {
                ...state,
                filters: { ...state.filters, checked: action.payload }
            }

        case 'SAVE-SELECTED-OPTIONS':
            return {
                ...state,
                filters: { ...state.filters, selected: action.payload }
            }

        case 'RESET-FILTERS':
            return {
                ...state,
                filters: { text: '', checked: false, selected: [] },
                filtered_todos: action.payload.todos,
                dropdown_list_options: action.payload.todos,
                reset: action.payload.reset,
            }

        case 'SET-MOBILE-NAVBAR':
            return {
                ...state,
                set_mobile_navbar: action.payload
            }


        default:
            return state
    }

}

export default Reducer;