import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // Track index of task being edited

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (editIndex === index) {
      cancelEdit();
    }
  };

  const handleEdit = (index, newValue) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
    cancelEdit();
  };

  const startEdit = (index, task) => {
    setEditIndex(index);
    setEditValue(task);
  };

  const cancelEdit = () => {
    setEditIndex(-1);
    setEditValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      className="search-bare"/>
      <button onClick={handleAddTask} className="add-btn">Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <div key={index} className="boutons">
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <li>{task}</li>
            )}
            <button onClick={() => handleDelete(index)} className="btn-delete">Delete</button>
            {editIndex === index ? (
              <button onClick={() => handleEdit(index, editValue)} className="btn-deal">OK</button>
            ) : (
              <button onClick={() => startEdit(index, task)} className="btn-edit">Edit</button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
