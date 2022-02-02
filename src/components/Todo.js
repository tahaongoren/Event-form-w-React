import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  function deleteHandler() {
    setModalIsOpen(true);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <span>{props.text}</span>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
};

export default Todo;
