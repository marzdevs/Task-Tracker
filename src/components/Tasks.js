import React from 'react';
import Task from './Task';
// Task lists
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    // to add a new object
    // setTasks([...tasks, new objext ])

    //  create a list with map
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
