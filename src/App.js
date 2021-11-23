import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
