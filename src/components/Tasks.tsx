import Task from "./Task";
import { ITask } from "./Interfaces";

interface Props {
  tasks: ITask[];
  onToggle: (a?: any) => any;
  onDelete: (a?: any) => any;
}

const Tasks = ({ tasks, onDelete, onToggle }: Props) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
