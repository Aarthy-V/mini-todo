import NewTodoForm from "../../components/NewTodoForm"

const DashboardLayout = ({children}) => {
    return(
        <div>
            <h1 className="text-3xl font-bold text-center mb-4"> Dashboard </h1>
            <div>
                <NewTodoForm />
            </div>
            <div>{children}</div>
        </div>
    )
}

export default DashboardLayout