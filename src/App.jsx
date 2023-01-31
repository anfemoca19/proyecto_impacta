import { Route, BrowserRouter, Routes } from "react-router-dom";
import Configruation from "./pages/Configuration/configuration";
import Courses from "./pages/Courses/courses";
import Dashboard from "./pages/Dashboart/dashboard";
import StyleLogin from "./pages/StylesLogin/styleLogin";
import ForgotPass from "./pages/ForgotPass/forgotPass";
import Login from "./pages/Login/login";
import NotFound from "./pages/NotFount/NotFound";
import Personalization from "./pages/Personalization/personalization";
import Register from "./pages/Register/register";
import Users from "./pages/Users/users";
import StyleAdmin from "./pages/StylesAdmin/styleAdmin";
import StyleAcademia from "./pages/StyleAcademia/styleAcademia";
import AddUser from "./pages/AddUser/addUser";
import CategoriasPages from "./pages/Categories/categories";
import CoursesTemplate from "./pages/CoursesTemplate/courseTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/courses/coursesTemplate/:id"
          element={<CoursesTemplate />}
        />
        <Route path="/categories" element={<CategoriasPages />} />
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
