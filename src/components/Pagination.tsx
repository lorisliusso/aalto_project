import { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import Todos from './Todos';
import Context from "../context/Context";
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';
import { TodosType } from '../context/Context';


const Pagination = (): JSX.Element => {

    const { filtered_todos, reset } = useContext(Context);

    const itemsPerPage = 5;

    const [currentItems, setCurrentItems] = useState<TodosType[]>([]);
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const handlePageClick = (event: { selected: number }) => {

        setCurrentPage(event.selected);
        const newOffset = (event.selected * itemsPerPage) % filtered_todos.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {

        const endOffset = itemOffset + itemsPerPage;

        setPageCount(Math.ceil(filtered_todos.length / itemsPerPage));

        setCurrentItems(filtered_todos.slice(itemOffset, endOffset));

    }, [itemOffset, filtered_todos]);


    useEffect(() => {

        setItemOffset(0);

        setCurrentPage(0);

        const endOffset = 0 + itemsPerPage;

        setPageCount(Math.ceil(filtered_todos.length / itemsPerPage));

        setCurrentItems(filtered_todos.slice(itemOffset, endOffset));

    }, [filtered_todos, reset]);


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
                    forcePage={currentPage}
                    previousLabel=
                    {<IoIosArrowDropleft
                        className={currentPage === 0 ? 'text-gray-400' : 'text-MainLightBlue'} />}
                />
            </div>

        </div>
    );
}


export default Pagination;