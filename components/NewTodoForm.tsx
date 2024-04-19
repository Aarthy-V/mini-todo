import { newTodo } from "@/utils/actions";

const NewTodoForm = ({}) => {
    return (
        <div className="max-w-xs mx-auto">
            <form action={newTodo} className="flex">
                <input
                    name="content"
                    type="text"
                    className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500 flex-grow"
                    placeholder="Enter your todo"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    New Todo
                </button>
            </form>
        </div>
    );
};

export default NewTodoForm;
