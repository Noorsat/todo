import React, {useState, useEffect} from 'react'
import {ToDoForm} from "../components/ToDoForm";
import {ToDoList} from "../components/ToDoList";

export function ToDo() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if(todos?.length){
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos])

    useEffect(() => {   
        const tasks = JSON.parse(localStorage.getItem('todos'));
        if (todos){
            setTodos(tasks);
        }
    }, [])

    function handleCreate(text) {
        setTodos([...todos, text])
    }

    console.log(todos);

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