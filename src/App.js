import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { useState, useEffect } from "react";
function App() {
  const [menuClick, setMenu] = useState(false);

  return (
    <div className="App">
      
          <Nav menuClick={menuClick} setMenu={setMenu}/>
          <Header menuClick={menuClick}/>
         <Main />
          <Footer />
    </div>
  );
}

export default App;
