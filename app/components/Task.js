import '../page.css';

export default function Task({ task, index, isActive, toggleCheckbox, handleDeleteTask }) {

    return (
        <div className={`task-container ${isActive ? 'task-container-darkmode' : ''}`}>
            <div className="task-box">
                <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    name={`checkbox-${index}`}
                    className={`checkbox ${isActive ? 'checkbox-darkmode' : ''}`}
                    checked={task.checked}
                    onChange={() => toggleCheckbox(index)}
                />
                <p className={task.checked ? 'line-through' : ''}>{task.text}</p>
            </div>
            <button className="button-trash" onClick={() => handleDeleteTask(index)}>
                {isActive ? <img src="../images/trash-dark.png" alt="trash icon" /> : <img src="../images/trash.png" alt="trash icon" />}
            </button>
        </div>
    );
};


