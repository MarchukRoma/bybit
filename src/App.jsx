import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal";
import Subheader from "./components/Subheader/Subheader";

function App() {
  const [modalIsView, setModalisView] = useState(false);
  const modalOpen = () => {
    setModalisView(true);
  };

  const closeModal = () => {
    setModalisView(false);
  };

  return (
    <>
      <Header />
      <Subheader />
      <Main onView={modalOpen} />
      {modalIsView && <Modal onClose={closeModal} />}
      <img
        src="./support.png"
        className="fixed bottom-[24px] right-[24px]"
        style={{ borderRadius: "50%" }}
      ></img>
    </>
  );
}

export default App;
