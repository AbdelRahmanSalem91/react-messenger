import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./pages/RegisterPage";
import Login from "./components/login/Login";
import AuthProvider, { AuthContext } from "./context/auth";
import { useContext } from "react";

function App() {
  const user = useContext(AuthContext);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        {!user ? (
          <Login />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
