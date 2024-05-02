import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./containers/Layout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";

function App() {
  const { token } = useSelector((state) => state.user.user);
  return (
    <BrowserRouter>
      <Routes>
        {token ? (
          <Route path="/app/*" element={<Layout />} />
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
          </>
        )}
        <Route
          path="*"
          element={<Navigate to={token ? "/app/farmer/dashboard" : "/login"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
