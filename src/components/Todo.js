import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./DeleteModal";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteButton() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <span>{props.text}</span>
      <div className="actions">
        <button className="btn" onClick={deleteButton}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
