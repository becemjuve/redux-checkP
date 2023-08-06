import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/slice";

export default function AddTask() {
  const [input, setInput] = useState("");
  const [showError,setShowError]= useState(false)
  const dispatch = useDispatch();
  const { globalList } = useSelector((state) => state.todo);

  const addTask = ()=>{
    dispatch(
      addTodo({
        id: globalList.length,
        description: input,
        isDone: false,
      })) 
    setInput("")
    setShowError(false)
  }
  return (
    <div className="text-light mb-4">
      <h3>
        Task List checkpoint <span className="text-dark">(BECEM ALIBI)</span>
      </h3>
      <form className="d-flex" role="search">
        {/* ----------------------------------------- input */}
        <input
          value={input}
          className="form-control me-2 bg-dark border-0 text-light"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="what will you do ?"
        />
        {/* --------------------------------------- add task btn */}
        <button
          className="btn btn-outline-dark"
          onClick={(e) => {
            e.preventDefault();
            input.trim() === "" ? setShowError(true) : addTask()
          }}
        >
          add
        </button>
      </form>
      {showError && <p className="text-danger">please fill out your fields !</p>}
    </div>
  );
}
