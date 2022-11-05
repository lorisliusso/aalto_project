import Pagination from "./Pagination";

const Results = (): JSX.Element => {

    return (

        <section className="relative self-center w-full h-fit py-5 xl:h-157.5 xl:w-207.5 bg-MainGray xl:ml-15 px-9 xl:self-start">

            <ul className="flex mt-3 w-full justify-between px-2">

                <div className="flex space-x-24">
                    <li className="font-bold text-MainBlue">USER ID</li>
                    <li className="font-bold text-MainBlue ">TITLE</li>
                </div>

                <li className="font-bold text-MainBlue ">COMPLETED</li>

            </ul>

            <hr className="h-px bg-[#C2C2C2] mt-1 mb-9" />

            <Pagination />

        </section>
    )
}

export default Results;