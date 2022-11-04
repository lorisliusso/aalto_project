import Context from '../context/Context';
import { useContext } from 'react';


const ToggleCheck = () => {

    const { todos, dispatch, filters } = useContext(Context);


    function handleChange() {

        let filteredTodos = [...todos];

        if (!filters.checked) {
            filteredTodos = filteredTodos.filter(todo =>
                todo.completed)
        }

        dispatch({ type: 'SAVE-CHECKED', payload: !filters.checked })


        if (filters.text) {
            filteredTodos = filteredTodos.filter(todo =>
                todo.title.toLowerCase().includes(filters['text'].toLowerCase()))
        }

        if (filters.selected.length > 0) {
            filteredTodos = filteredTodos.filter(todo =>
                filters.selected.includes(todo.id))
        }

        dispatch({ type: 'FILTERED_TODOS', payload: filteredTodos })

    }


    return (

        <div className='mt-15 text-MainBlue'>

            <h3 className='font-bold'>COMPLETED</h3>

            <div className='flex space-x-3 mt-5 items-center'>

                <p>NO</p>

                <label className="inline-flex items-center cursor-pointer">

                    <input onChange={handleChange} type="checkbox" className="sr-only peer" />

                    <div className="flex items-center relative w-20 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                  rounded-full peer dark:bg-[#BBBBBB] peer-checked:after:translate-x-full peer-checked:after:left-6
                  peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1.5
                   after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6
                  after:transition-all dark:border-gray-600 "></div>

                </label>

            </div>

        </div>


    )
}

export default ToggleCheck;