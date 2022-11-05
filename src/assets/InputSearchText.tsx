import magnifyingGlass from '../icons/magnifying-glass.png'
import Context from '../context/Context';
import { useState, useContext } from 'react';


const InputSearchText = (): JSX.Element => {

    const { todos, dispatch, filters } = useContext(Context);
    const [inputValue, setInputValue] = useState('')


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {

        if (e.key === 'Enter') {

            const searchKeyword = inputValue;

            dispatch({ type: 'SAVE-INPUT-TEXT', payload: searchKeyword })

            let filteredTodos = todos.filter((todo: any) =>
                todo.title.toLowerCase().includes(searchKeyword.toLowerCase()))

            if (filters.checked) {
                filteredTodos = filteredTodos.filter((todo: any) =>
                    todo.completed)
            }

            if (filters.selected.length > 0) {
                filteredTodos = filteredTodos.filter((todo: any) =>
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

            <input onKeyDown={handleKeyDown} onChange={handleInput} className="pl-3 italic flex-1" type="text" id='search' placeholder="Search..." />

        </label>

    )

}

export default InputSearchText;