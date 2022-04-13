import {ToDoItem} from "./ToDoItem";
import './../App.css'

export function ToDoList({ todos, onRemove }) {
    return (
        <div className="todo__items">
            <ul>
                {
                    todos.length > 0 && todos.map((todo, index) => (
                        <ToDoItem variant="dark" action  todo={todo.text} date={todo.date} onRemove={() => onRemove(index)} />
                    ))
                }
            </ul>
        </div>
    )
}