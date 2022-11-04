import Context from '../context/Context';
import { useState, useContext } from 'react';
import MultiDropDownSelection from '../assets/MultiDropDownSelection';
import InputSearchText from '../assets/InputSearchText';
import ToggleCheck from '../assets/ToggleCheck';
import uuid from 'react-uuid';


const Filters = () => {

    const { todos, dispatch } = useContext(Context);

    const [resetForm, setResetForm] = useState('')

    function reset() {
        dispatch({ type: 'RESET-FILTERS', payload: todos })
        setResetForm(uuid())
    }

    return (

        <aside key={resetForm} className="hidden xl:flex flex-col bg-MainGray h-130 w-82.5 px-8">

            <h2 className="mx-auto mt-4 text-3xl text-MainBlue font-bold">FILTERS</h2>

            <InputSearchText />

            <ToggleCheck />

            <MultiDropDownSelection />

            <button onClick={reset} className='mt-16 underline text-MainBlue underline-increase-distance p-2'>Reset filters</button>

        </aside >

    )

}

export default Filters;