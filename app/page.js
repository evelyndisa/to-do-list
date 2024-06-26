'use client'
import "./page.css";
import { useState } from 'react';
import Task from "./components/Task";

export default function Home() {

  const date = new Date();

  const dayOfWeek = date.getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[dayOfWeek];

  const dayOfMonth = date.getDate();

  const getmonth = date.getMonth()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[getmonth]


  const [tasks, setTasks] = useState([]);  // donde se almacenan las tareas ingresadas por el usuario
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value); // se actualiza el estado 'inputValue' si el usuario escribe algo
  };
  const handleSubmit = (event) => {  // se activa cuando el usuario envia el form
    event.preventDefault();
    if (inputValue.trim() !== '') { // si esta vacio, no envia su valor a task
      const newTask = { text: inputValue, checked: false };
      setTasks([...tasks, newTask]);  // reemplazamos el array de task por uno nuevo que incluya todas las tareas anteriores mas la nueva en un nuevo objeto
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks]; // copiar el arreglo task
    updatedTasks.splice(index, 1); // elimina la tarea del índice actual
    setTasks(updatedTasks); // actualiza el estado de las tareas
  };
  const toggleCheckbox = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked; // cambia el estado del checkbox
    setTasks(updatedTasks);
  };

  const [isActive, setIsActive] = useState(false);
  const HandleDarkMode = () => {
    setIsActive(!isActive)
  }


  return (
    <div className={`container ${isActive ? 'darkmode' : ''}`}>
      <div className="date-selector">
        <div className="date">
          <p className={`day ${isActive ? 'darkmode' : ''}`}>{`${day}, ${dayOfMonth}`}</p>
          <p className={`month ${isActive ? 'darkmode' : ''}`}>{month}</p>
        </div>
        <button className="button-moon" onClick={HandleDarkMode}><img src="../images/moon.png"></img></button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="input"
          name="input"
          className={`input-add-task ${isActive ? 'input-add-task-darkmode' : ''}`}
          autoComplete="off"
          placeholder="Add task.."
          value={inputValue}
          onChange={handleChange}
        />
        <button className="button-create" type="submit">Create</button>
      </form>
      <div>
        <div className="task-status">
          <p>To do <span className="span">{tasks.length}</span></p>
          <p>Complete <span className="span">{tasks.filter(task => task.checked).length}</span> of <span className="span">{tasks.length}</span> </p>
        </div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            isActive={isActive}
            toggleCheckbox={toggleCheckbox}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};
