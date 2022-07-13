import { FaTimes } from "react-icons/fa";
import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  onDelete: (a?: any) => any;
  onToggle: (a?: any) => any;
}

const Task = ({ task, onDelete, onToggle }: Props) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
