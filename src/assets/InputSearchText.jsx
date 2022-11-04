import magnifyingGlass from '../icons/magnifying-glass.png'
import Context from '../context/Context';
import { useContext } from 'react';


const InputSearchText = () => {

    const { todos, dispatch, filters } = useContext(Context);


    function handleKeyDown(e) {

        if (e.key === 'Enter') {

            const searchKeyword = e.target.value;

            dispatch({ type: 'SAVE-INPUT-TEXT', payload: searchKeyword })

            let filteredTodos = todos.filter(todo =>
                todo.title.toLowerCase().includes(searchKeyword.toLowerCase()))

            if (filters.checked) {
                filteredTodos = filteredTodos.filter(todo =>
                    todo.completed)
            }

            if (filters.selected.length > 0) {
                filteredTodos = filteredTodos.filter(todo =>
                    filters.selected.includes(todo.id))
            }

            dispatch({ type: 'FILTERED_TODOS', payload: filteredTodos })

        }
    }


    return (

        <label htmlFor='search' className="flex mt-8 h-12 w-69 border border-MainPurple bg-white">

            <figure className='bg-MainPurple w-12 flex items-center justify-center'>
                <img className='h-6' src={magnifyingGlass} alt="magnifying-glass" />
            </figure>

            <input onKeyDown={handleKeyDown} className="pl-3 italic flex-1" type="text" id='search' placeholder="Search..." />

        </label>

    )

}

export default InputSearchText;