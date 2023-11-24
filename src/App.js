import { useState } from "react";
import "./App.css";
import { container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
// import About from "./components/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enebled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enebled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Textutils by Muntasirul"
        mode={Mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Try TextUtils - Word Counter, Character Counter, Copy Text, Remove Spaces "
          mode={Mode}
        />
        {/* <About /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
