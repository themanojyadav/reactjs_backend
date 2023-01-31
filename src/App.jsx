import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/backend/auth/AdminLogin";
import Dashboard from "./pages/backend/Dashboard";
import MainCategories from "./pages/backend/main_categories/MainCategories";
import BackendLayout from "./pages/BackendLayout";
import Homepage from "./pages/frontend/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<BackendLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="main-categories" element={<MainCategories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
