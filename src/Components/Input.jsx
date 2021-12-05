
import { useState } from 'react';

export default function Input({onTax}){

    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        onTax(text)
    }

    return (
        <div>
            <input type="text"
            placeholder="Type Your youser name..."
            onChange={handleChange}
            value={text}
            />
            <button onClick={handleClick}>ADD</button>
        </div>
    )
}