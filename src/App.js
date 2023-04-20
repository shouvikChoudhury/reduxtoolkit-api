import React, { useState } from "react";
import TodoDisplay from './Components/TodoDisplay';
import './App.css';
import Modal from './Components/Modal';

function App() {

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      {!modalOpen &&
        <button className="openModalBtn m-3" onClick={() => { setModalOpen(true); }}>Add task here</button>}

      {modalOpen && <Modal setOpenModal={setModalOpen} />}

      <TodoDisplay />
    </div>
  );
}

export default App;
