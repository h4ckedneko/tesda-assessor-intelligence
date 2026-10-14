import { Routes, Route } from "react-router";
import { Home } from "./routes/home";
import { Login } from "./routes/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
