import Context from '../context/Context';
import { useState, useContext } from 'react';
import MultiDropDownSelection from '../assets/MultiDropDownSelection';
import InputSearchText from '../assets/InputSearchText';
import ToggleCheck from '../assets/ToggleCheck';
import uuid from 'react-uuid';
import X from "../icons/x-close-mobile.svg"


const FiltersMobile = () => {

    const { todos, dispatch } = useContext(Context);

    const [resetForm, setResetForm] = useState('')

    function closeMobileNavbar() {
        dispatch({ type: 'SET-MOBILE-NAVBAR', payload: false })
    }

    function reset() {
        dispatch({ type: 'RESET-FILTERS', payload: todos })
        setResetForm(uuid())
    }

    return (

        <aside key={resetForm} className="flex flex-col bg-MainGray h-screen w-full md:w-1/2 px-6 py-5">

            <figure>
                <img onClick={closeMobileNavbar} src={X} alt="X" className="
            cursor-pointer h-8
            hover:scale-105 transition duration-75 ease-in" />
            </figure>

            <h2 className="mx-auto mt-4 text-3xl text-MainBlue font-bold mb-5">FILTERS</h2>

            <InputSearchText />

            <ToggleCheck />

            <MultiDropDownSelection />

            <button onClick={closeMobileNavbar} className="self-center mt-10 
            cursor-pointer px-10 py-2 text-xl bg-MainPurple text-white
            hover:scale-105 transition duration-75 ease-in">APPLY </button>

            <button onClick={reset} className='mt-16 underline text-MainBlue underline-increase-distance'>Reset filters</button>

        </aside >

    )

}

export default FiltersMobile;