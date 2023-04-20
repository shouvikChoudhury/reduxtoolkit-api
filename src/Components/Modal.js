import React from "react";
import "./Modal.css";
import TaskForm from "./TaskForm";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground" onClick={(event) => { setOpenModal(false); event.stopPropagation() }}>
            <div className="modalContainer" onClick={(event) => { event.stopPropagation() }}>
                <div className="titleCloseBtn">
                    <button onClick={() => { setOpenModal(false) }}>X</button>
                </div>
                <div className="title">
                    <h1>Add task to todo !</h1>
                </div>
                <div className="body">
                    <TaskForm setOpenModal={setOpenModal} />
                </div>
                <div className="footer">
                    <button onClick={() => { setOpenModal(false) }} id="cancelBtn">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;