import X from '../icons/x.svg'
import Check from '../icons/check.svg'

const Todo = ({ userId, title, completed }) => {

    return (

        <div className="flex bg-white h-17.5 mb-5 items-center justify-between 
        px-10 border-b-2 border-b-MainLightBlue">

            <div className="flex flex-1">
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