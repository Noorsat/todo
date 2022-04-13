import {Button} from "@mui/material";

export function ToDoItem({ todo, date, onRemove }) {
    return (
        <li>
            <div>
                <div className="todo__item-text">
                    {todo}
                </div>
                <div className="todo__item-date">
                    created {date}
                </div>
            </div>
            <div className="todo__item-delete">
                <Button type='submit' size="large" variant="contained" onClick={() => onRemove()}>Delete</Button>
            </div>
        </li>
    )
}