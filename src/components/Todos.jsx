import Todo from "./Todo";

const Todos = ({ currentItems }) => {

    return (
        <>
            {currentItems &&
                currentItems.map((todo) => (
                    <Todo key={todo.id} userId={todo.id}
                        title={todo.title} completed={todo.completed} />
                ))}
        </>
    );
}

export default Todos;