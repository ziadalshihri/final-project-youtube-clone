import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./components/Home.js";
import SignUp from "./components/Signup.js";
import SignIn from "./components/SignIn.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
