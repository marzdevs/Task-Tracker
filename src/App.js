import { useState } from 'react';
import React from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

export default function App() {
  // a new state to hide the add task
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'March 20th at  1 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'April 20th at  3 pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'May 27th at  10 am',
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    // adds a random id
    const id = Math.floor(Math.random() * 10000) + 1;
    //adds the id and the task added
    const newTask = { id, ...task };
    // add the old array task list and the new task gets added into it
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}
