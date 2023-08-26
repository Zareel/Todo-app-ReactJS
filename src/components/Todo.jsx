import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = (e) => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    e.preventDefault();
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const updateStatus = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: true };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="w-full h-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-14">
        <form className="w-[550px] bg-white px-4 py-8 rounded-2xl flex justify-between">
          <input
            type="text"
            placeholder="Enter your task here ..."
            className="text-2xl outline-none"
            value={newTask}
            onChange={handleChange}
          />
          <button
            onClick={addTask}
            className="px-16 py-3  mr-6 rounded-xl text-2xl font-semibold bg-purple-800 text-white"
          >
            Add
          </button>
        </form>
        <div className="w-full flex flex-wrap gap-10 py-16">
          {todoList &&
            todoList.map((item, index) => {
              return (
                <div
                  key={index + 1}
                  className="bg-slate-800 flex flex-col gap-6 w-[400px] h-[350px] text-white px-6 py-10 rounded-xl"
                >
                  <h1 className="text-2xl font-bold">
                    {index + 1}. {item.taskName}
                  </h1>
                  <h2 className="text-xl font-semibold py-6">
                    Status: {item.completed ? "Completed" : "Pending"}
                  </h2>
                  <button
                    onClick={() => {
                      updateStatus(item.id);
                    }}
                    className="bg-blue-800 text-white text-2xl font-semibold py-3 w-full rounded-lg"
                  >
                    Update Status
                  </button>
                  <button
                    onClick={() => {
                      deleteTask(item.id);
                    }}
                    className="bg-blue-800 text-white text-2xl font-semibold py-3 w-full rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
