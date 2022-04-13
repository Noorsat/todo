import React, {useState, useEffect} from 'react'
import {ToDoForm} from "../components/ToDoForm";
import {ToDoList} from "../components/ToDoList";

export function ToDo() {
    const [todos, setTodos] = useState([])

    useEffect(() => {   
        if (localStorage.getItem('todos')){
            const tasks = JSON.parse(localStorage.getItem('todos'));
            if (tasks){
                setTodos(tasks)
            }
        }
    }, [])

    function handleCreate(text) {
        setTodos([...todos, text])
        const arr = [...todos,text];
        localStorage.setItem('todos', JSON.stringify(arr));
    }

    function handleRemove(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div className="todo">
            <ToDoForm onCreate={handleCreate} />
            <ToDoList todos={todos} onRemove={handleRemove} />
        </div> 
    )
}