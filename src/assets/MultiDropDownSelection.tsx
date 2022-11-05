import { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Select, { components } from "react-select";
import { IoIosArrowDropdown } from 'react-icons/io';
import { TodosType } from '../context/Context';

type Options = {
    value?: number
    label?: number
}

const MultiDropDownSelection = (): JSX.Element => {

    const [options, setOptions] = useState<Options[]>([]);

    const { todos, dispatch, dropdown_list_options, filters } = useContext(Context)

    function handleChange(selectedIds: any) {

        if (selectedIds.length === 0) {

            dispatch({ type: 'SAVE-SELECTED-OPTIONS', payload: [] })

            let filteredTodos: TodosType[] = [];

            if (filters.text) {

                filteredTodos = todos.filter((todo: any) =>
                    todo.title.toLowerCase().includes(filters['text'].toLowerCase()))
            }

            if (filters.checked) {
                filteredTodos = filteredTodos.filter((todo: any) =>
                    todo.completed)
            }

            dispatch({ type: 'FILTERED_TODOS', payload: filteredTodos })
            return
        }

        //ELSE://

        const selectedArray: number[] = [];

        for (const opt of selectedIds) {
            selectedArray.push(opt.value)
        }

        dispatch({ type: 'SAVE-SELECTED-OPTIONS', payload: selectedArray })

        const filteredTodos = todos.filter((todo: any) =>
            selectedArray.includes(todo.id))

        const filteredDropDownList = dropdown_list_options.filter((todo: any) =>
            selectedArray.includes(todo.id) === false)

        dispatch({ type: 'FILTERED_TODOS-KEEPLIST', payload: { todos_data: filteredTodos, dropdown_list: filteredDropDownList } })
    }


    function convertToOptions(array: TodosType[]): Options[] {
        const options = [];

        for (const obj of array) {
            const id = obj.id;
            options.push({ value: id, label: id })
        }
        return options;
    }

    useEffect(() => {

        setOptions(convertToOptions(dropdown_list_options))


    }, [dropdown_list_options])


    //////////////////////STYLES

    const DropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <IoIosArrowDropdown className='text-MainBlue h-6 w-6' />
            </components.DropdownIndicator>
        );
    };



    const customStyles = {
        control: (base: any, state: any) => ({
            ...base,
            border: "1px solid #003479",
            borderRadius: "0px"

            // You can also use state.isFocused to conditionally style based on the focus state
        })
    }


    /////////////////////////////////////

    return (
        <>

            <label className="block mt-[50px] font-bold text-MainBlue mb-3" htmlFor="">SELECT USER ID</label>

            <Select
                styles={customStyles}
                closeMenuOnSelect={false}
                components={{ DropdownIndicator, IndicatorSeparator: () => null }}
                isMulti
                options={options}
                onChange={handleChange}
                placeholder=''

            />

        </>
    );
}

export default MultiDropDownSelection;