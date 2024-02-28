import { useState } from "react";

export function CreateTodo({updateUI}) {

    // const handleClick = () => {
    //     fetch('http://localhost:9000/todo', {
    //         method: "POST",
    //         body: {
    //             title: 'title', 
    //             description: 'description'
    //         }
    //     })
    //     .then((data) => data.json())
    //     .then((resp) => {
    //         console.log(resp)
    //     })
    // }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return <div>
        <input type="text" style={{ padding: 10, margin:10 }} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/> <br/>
        <input type="text" style={{ padding: 10, margin:10 }} onChange={(e) => setDescription(e.target.value)} placeholder="Description"/><br/>
        <button style={{ padding: 10, margin:10 }}
            onClick={async () => {
                await fetch('http://localhost:9000/todo', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: title, 
                        description: description
                    })
                })

                updateUI()
                console.log('Added')
                
            }}
        >Add a todo</button>
    </div>
}