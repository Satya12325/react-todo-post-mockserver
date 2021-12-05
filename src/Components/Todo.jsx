import Input from "./Input";
import axios from "axios";
import { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodos] = useState([]);
  const [looding, setLooding] = useState(true);
  const handleTask = (title) => {
    const payload = {
      title: title,
      status: false
    };
    const config = {
      url: "http://localhost:3000/task",
      method: "POST",
      data: payload
    }
    return axios(config);
  };
  const getTodos = () => {
    const config = {
      url: "http://localhost:3000/task",
      method: "GET"
    };
    return axios(config);
  };
  const HandleGetTodos = () => {
    return getTodos()
      .then((res) => {
        setTodos(res.data);
        setLooding(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Use Effect Use
  useEffect(() => {
    HandleGetTodos();
  });

  const onSubmit = async (title) => {
    try {
      setLooding(true);
      await handleTask(title);
      await HandleGetTodos();
      setLooding(false);
    } 
    catch (err) {
      console.log(err);
    }
  }


  if (looding) {
    return <h3>Looding...</h3>;
  }
  return (
    <div>
      <Input onTax={onSubmit} />
      {
      todo.map((item) => {
          return <div key={item.id}>
              <span>{item.id} - </span>
              <span>{item.title} - </span>
              <span>{item.status===true?"Completed": "Not Completed"}</span>
          </div>
      })}
    </div>
  )
}

export default Todo;
