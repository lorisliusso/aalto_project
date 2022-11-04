import { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import Todos from './Todos.jsx';
import Context from "../context/Context.jsx";
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';


const Pagination = () => {

    const { filtered_todos } = useContext(Context)

    const itemsPerPage = 5;

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(filtered_todos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filtered_todos.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, filtered_todos]);


    const handlePageClick = (event) => {

        setCurrentPage(event.selected)
        const newOffset = (event.selected * itemsPerPage) % filtered_todos.length;
        setItemOffset(newOffset);
    };


    return (

        <div className=' w-full flex flex-col' id='pagination'>

            <Todos currentItems={currentItems} />

            <div className='mt-14 flex justify-center items-center'>


                <ReactPaginate className='absolute z-20 bottom-9 flex items-center space-x-5 text-MainBlue self-center text-lg'

                    activeClassName={'active-page item-page'}
                    breakLabel="..."
                    nextLabel=
                    {<IoIosArrowDropright className={currentPage === (filtered_todos.length / itemsPerPage) - 1 ? 'text-gray-400'
                        : 'text-MainLightBlue'} />}
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={4}
                    pageCount={pageCount}
                    previousLabel=
                    {<IoIosArrowDropleft
                        className={currentPage === 0 ? 'text-gray-400' : 'text-MainLightBlue'} />}

                    renderOnZeroPageCount={null}
                />
            </div>

        </div>
    );
}


export default Pagination;