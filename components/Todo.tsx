'use client'
import { useTransition } from "react"
import {completeTodo} from "@/utils/actions"

const Todo=({todo})=>{
    const [isPending, startTransition] = useTransition()
    return (
        <div
            className={`border border-gray-300 rounded-lg p-2 cursor-pointer ${todo.completed ? 'line-through text-gray-900': ''}`} 
            onClick={()=>startTransition(()=>completeTodo(todo.id))}>
            {todo.content}
        </div>
    )
}

export default Todo