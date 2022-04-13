import {Button, TextField} from "@mui/material";
import {useState} from "react";
import '../App.css'


export function ToDoForm({ onCreate }) {
    const [text, setText] = useState('')
    return (
        <div id="todo" className="todo__form">
            <div className="todo__input">
                <TextField placeholder="Enter name"  size="lg" value={text} onChange={(e) => setText(e.target.value)} style={{width:360}}/>
            </div>
            <div>
                <Button type='submit' size="large" variant="contained" onClick={() => { 
                    onCreate({
                        text:text,
                        date: `${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
                    }) 
                    setText("")
                }} style={{height:55, paddingLeft:30, paddingRight:30}}>Create</Button>
            </div>
        </div>
    )
}