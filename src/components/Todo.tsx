import X from '../icons/x.svg'
import Check from '../icons/check.svg'

type TodoProps = {
    userId: number;
    title: number;
    completed: boolean;
}

const Todo = ({ userId, title, completed }: TodoProps): JSX.Element => {

    return (

        <div className="flex bg-white h-17.5 mb-5 items-center justify-between 
        px-10 border-b-2 border-b-MainLightBlue">

            <div className="flex flex-1 items-center">
                <p>{userId}</p>
                <p className="ml-24 md:ml-28">{title}</p>
            </div>

            <div>
                <img className='h-6' src={completed ? Check : X} alt="completed" />
            </div>

        </div>

    )
}

export default Todo;