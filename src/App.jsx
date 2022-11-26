import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import NotFound from "./pages/NotFount/NotFound";
import Register from "./pages/Register/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
