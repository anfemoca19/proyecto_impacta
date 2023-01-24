import { Route, BrowserRouter, Routes } from "react-router-dom";
import Configruation from "./pages/Configuration/configurarion";
import Courses from "./pages/Courses/courses";
import Dashboard from "./pages/Dashboart/dashboard";
import StyleLogin from "./pages/StylesLogin/StyleLogin";
import ForgotPass from "./pages/ForgotPass/forgotPass";
import Login from "./pages/Login/login";
import NotFound from "./pages/NotFount/NotFound";
import Personalization from "./pages/Personalization/personalization";
import Register from "./pages/Register/register";
import Users from "./pages/Users/users";
import StyleAdmin from "./pages/StylesAdmin/StyleAdmin";
import StyleAcademia from "./pages/StyleAcademia/StyleAcademia";
import AddUser from "./pages/AddUser/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/styleAcademia" element={<StyleAcademia />} />
        <Route path="/styleAdmin" element={<StyleAdmin />} />
        <Route path="/styleLogin" element={<StyleLogin />} />
        <Route path="/personalization" element={<Personalization />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users" element={<Users />} />
        <Route path="/configuration" element={<Configruation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
