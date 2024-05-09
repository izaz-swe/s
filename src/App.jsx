import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import BuyerPage from "./containers/BuyerPage";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";


function App() {
  const { token, role } = useSelector((state) => state.user.user);
  let isFarmer = false;
  if( role === "farmer" ) isFarmer= true;
  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          isFarmer ? (
            <Route path="/app/farmer/*" element={<Layout />} />
          ) : (
            <Route path="/app/buyer/*" element={<BuyerPage />} />
          )
        ) : (
          <>
            <Route path="" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
        <Route
          path="*"
          element={
            <Navigate to={token  ? isFarmer ? "/app/farmer/dashboard" : "/app/buyer/": ""} replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
