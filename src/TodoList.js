import React, { useState } from "react"
import './style.css'



export default function TodoList2() {
    const [todoList, setTodoList] = useState([])
    const [todoInput, setTodoInput] = useState("")
    const add = (e) => {
        e.preventDefault()
        if (todoInput === "") return
        setTodoList(currentTodoList => {
            return [...currentTodoList, { name: todoInput, id: crypto.randomUUID(), completed: false }]
        })
        setTodoInput("")
    }


    function toggleCheck(id, completed) {
        setTodoList((currentTodoList) => {
            const updatedTodoList = currentTodoList.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed };
                }
                return todo;
            });
            console.log("Updated Todo List:", updatedTodoList); // Add this log
            return updatedTodoList;
        });
    }

    function delItem(id) {
        setTodoList(
            (currentTodoList => {
                return currentTodoList.filter((todo) => todo.id !== id)

            })
        )
    }
    return (
        <>
        <div className="todobox">
            <form onSubmit={add}>
                <div className="form-row">
                    <h1>To-Do App..</h1>
                    <label htmlFor="todo">New Todo</label>
                    <input type="text" id="todo" onChange={(e) => setTodoInput(e.target.value)} value={todoInput}></input>
                </div>
                <button>Add</button>
            </form>
            
            <h1> Todo List </h1> <div className="progress">{todoList.length!==0 ? todoList.filter((t)=>t.completed===true).length+"/"+
                todoList.length
            +"✅":"No todos"} </div>
            <ul>
                
                {
                    todoList.map((todo) => <li key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={(e) => toggleCheck(todo.id, e.target.checked)} /> <span className={todo.completed ? "completed" : "uncompleted"}>
                                {todo.name}
                            </span>
                        </label>
                        <button className="delete" onClick={() => delItem(todo.id)}>Delete</button>
                    </li>)
                }
            </ul>
        </div>
        
        <footer>
                <p>Made with ❤️ By <a href="https://twitter.com/abdelm_dev" target="__blank">@abdelm_dev</a></p>
        </footer>
        </>
    )
}

// export function Todolist2() {
//     const [todo, setTodo] = useState("")
//     const [todoList, setTodoList] = useState([])


//     function add() {
//         if (todo.trim() !== "")
//             setTodoList([...todoList, todo])
//         setTodo("");

//     }
//     function del(index) {
//         const updatedTodoList = todoList.filter((_, i) => i !== index);
//         setTodoList(updatedTodoList)
//     }
//     return (
//         <>
//             <h1>React Todolist</h1>
//             <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} ></input>
//             <button onClick={add}>Add</button>

//             {todoList.map((t, i) => <><input type="checkbox" /><p key={i} id={i}>{t} <button onClick={()=>del(i)}>Delete</button></p></>)}
//         </>
//     )
// }