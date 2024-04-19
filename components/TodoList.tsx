import Todo from "./Todo";

const TodoList = ({ todos }) => {
    return (
        <div className="max-w-md mx-auto mt-4">
            <div className="grid gap-4">
                {todos.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
