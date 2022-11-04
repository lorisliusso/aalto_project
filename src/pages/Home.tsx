import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useContext, useEffect } from "react";
import Context from "../context/Context.jsx";
import { searchTodos } from "../context/Actions.jsx";

const Home = (): JSX.Element => {

    const { dispatch } = useContext(Context)

    async function getDataFromApi() {
        const data = await searchTodos();
        dispatch({ type: 'GET_TODOS', payload: data })
    }

    useEffect(() => {
        getDataFromApi()
    }, [])


    return (

        <div className="flex flex-col max-w-screen min-h-screen overflow-x-hidden" id='container'>

            <Header />
            <Main />
            <Footer />

        </div>

    )
}

export default Home;