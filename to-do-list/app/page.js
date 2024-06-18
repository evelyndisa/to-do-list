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
        <button className="button-mode-dark"></button>
      </div>
      <form>
        <input type="text" id="input" name="input"></input>
        <button></button>
      </form>
      <div>
        <div>
          <p></p>
          <p></p>
        </div>
        <div>
          <input type="checkbox" id="checkbox" name="checkbox"></input>
          <button></button>
        </div>
      </div>
    </div>
  );
}
