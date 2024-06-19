import "./page.css";

export default function Home() {

  const date = new Date();

  const dayOfWeek = date.getDay();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[dayOfWeek];

  const dayOfMonth = date.getDate();

  const getmonth = date.getMonth()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = months[getmonth]


  return (
    <div className="container">
      <div className="date-selector">
        <div className="date">
          <p className="day">{`${day}, ${dayOfMonth}`}</p>
          <p className="month">{month}</p>
        </div>
        <button className="button-mode-dark"><img src="../images/moon.png"></img></button>
      </div>
      <form className="form">
        <input type="text" id="input" name="input" className="input-add-task" placeholder="Add task.."></input>
        <button className="button-create">Create</button>
      </form>
      <div>
        <div className="task-status">
          <p>To do</p>
          <p>Complete 0 of 1</p>
        </div>
        <div className="task-container">
          <input type="checkbox" id="checkbox" name="checkbox" className="checkbox"></input>
          <button className="button-trash"><img src="../images/trash.png"></img></button>
        </div>
      </div>
    </div>
  );
}
