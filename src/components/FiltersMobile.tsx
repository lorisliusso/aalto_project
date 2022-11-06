import Context from '../context/Context';
import { useContext } from 'react';
import MultiDropDownSelection from '../assets/MultiDropDownSelection';
import InputSearchText from '../assets/InputSearchText';
import ToggleCheck from '../assets/ToggleCheck';
import uuid from 'react-uuid';
import X from "../icons/x-close-mobile.svg"


const FiltersMobile = (): JSX.Element => {

    const { todos, dispatch, reset } = useContext(Context);

    function closeMobileNavbar() {
        dispatch({ type: 'SET-MOBILE-NAVBAR', payload: false })
    }

    function activateReset() {
        dispatch({ type: 'RESET-FILTERS', payload: { todos, reset: uuid() } })

    }

    return (

        <aside key={reset} className="flex flex-col bg-MainGray h-screen w-full md:w-1/2 px-6 py-5">

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

            <button onClick={activateReset} className='mt-16 underline text-MainBlue underline-increase-distance'>Reset filters</button>

        </aside >

    )

}

export default FiltersMobile;