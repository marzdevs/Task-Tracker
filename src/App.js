import { useState } from 'react';
import React from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

export default function App() {
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

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}
