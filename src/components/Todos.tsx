import Todo from "./Todo";
import { TodosType } from "../context/Context";

const Todos = ({ currentItems }: { currentItems: TodosType[] }): JSX.Element => {

    return (
        <>
            {currentItems &&
                currentItems.map((todo: any) => (
                    <Todo key={todo.id} userId={todo.id}
                        title={todo.title} completed={todo.completed} />
                ))}
        </>
    );
}

export default Todos;