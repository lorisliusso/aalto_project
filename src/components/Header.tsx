import aaltoLogo from '../icons/aalto-logo.png'
import hamburger from '../icons/hamburger.svg'
import FiltersMobile from './FiltersMobile'
import { useContext } from 'react'
import Context from '../context/Context'

const Header = (): JSX.Element => {

    const { dispatch, set_mobile_navbar } = useContext(Context);

    function activateMobileNavbar() {
        dispatch({ type: 'SET-MOBILE-NAVBAR', payload: true })
    }

    return (

        <nav className="relative bg-MainPurple h-24 w-full py-5 flex justify-center">

            <figure className='flex justify-start items-end space-x-20 w-full '>
                <img onClick={activateMobileNavbar} className='ml-10 xl:hidden h-10 cursor-pointer 
                 hover:scale-110 transition duration-75 ease-in' src={hamburger} alt="hamburger" />
                <img className='h-14 w-28' src={aaltoLogo} alt="aalto-logo" />
            </figure>

            {/*MOBILE FILTERS*/}

            < section className={set_mobile_navbar === false ? "invisible opacity-0"
                : "opacity-100 absolute z-50 bg-white w-full h-full inset-y-0 right-0 transition-opacity  duration-100 ease-in-out"}
                id='navbar-mobile' >

                <FiltersMobile />

            </section>

        </nav>
    )
}

export default Header;