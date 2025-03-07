import React from "react";
import "./Modal.css";
import TaskForm from "./TaskForm";

function Modal({ setOpenModal }) {
    return (
        <div className="modalBackground" onClick={(event) => { setOpenModal(false); event.stopPropagation() }}>
            <div className="modalContainer" onClick={(event) => { event.stopPropagation() }}>
                <div className="body">
                    <TaskForm setOpenModal={setOpenModal} />
                </div>
            </div>
        </div>
    );
}

export default Modal;