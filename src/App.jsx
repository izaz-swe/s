import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import BuyerPage from "./containers/BuyerPage";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AccessDenied from "./pages/AccessDenied";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<BuyerPage />} />
        <Route path="/app/farmer/*" element={<Layout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="access-denied" element={<AccessDenied/>}/>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
