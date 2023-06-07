import React, { useState } from "react";
import { Helmet } from "react-helmet";
const Modal = ({ opened, setOpened, children }) => {
  return (
    <div className={`overlay animated ${opened ? "show" : ""}`}>
      <div className="modal">
        <svg
          height="200"
          viewBox="0 0 200 200"
          width="200"
          onClick={() => {
            setOpened(false);
          }}
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </div>
    </div>
  );
};

function App() {
  const [opened, setOpened] = React.useState(false);
  return (
    <div className="App">
      <Helmet>
        <title>Modal window</title>
        <meta name="descriptoin" content="Creating an animated modal"></meta>
      </Helmet>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpened(true);
        }}
      >
        ✨ Open a window
      </button>
      <Modal opened={opened} setOpened={setOpened}>
        <h3>Booo!!</h3>
        <img src="https://usagif.com/wp-content/uploads/2022/06/happy-cat-title.gif"></img>
      </Modal>
    </div>
  );
}

export default App;
