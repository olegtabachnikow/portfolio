import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import About from "../About/About";
import CVPopup from "../CVPopup/CVPopup";
import Contacts from "../Contacts/Contacts";

function App() {
  const [isBlack, setIsBlack] = React.useState(false);
  const [isCVPopupOpen, setIsCVPopupOpen] = React.useState(false);
  const handleScroll = React.useCallback(() => {
    window.scrollY >= window.innerHeight ? setIsBlack(true) : setIsBlack(false);
  }, [setIsBlack]);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }, [handleScroll]);
  function handleOpenPopup() {
    setIsCVPopupOpen(true);
  }
  function closeAllPopups() {
    setIsCVPopupOpen(false);
  }
  return (
    <div className="app">
      <Header isBlack={isBlack}>
        <Navigation isBlack={isBlack} />
      </Header>
      <Content>
        <Main />
      </Content>
      <Content>
        <Projects />
      </Content>
      <Content>
        <About onOpen={handleOpenPopup} />
      </Content>
      <Content>
        <Contacts />
      </Content>
      <CVPopup isOpen={isCVPopupOpen} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
