import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { useState, useEffect } from "react";
function App() {
  const [load, setload] = useState(true);
  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 2500);
  }, []);
  return (
    <div className="App">
      {load ? (
        <Loading />
      ) : (
        <div>
          <Nav />
          <Header />
         <Main />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
