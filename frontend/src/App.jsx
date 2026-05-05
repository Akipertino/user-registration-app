import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/Footer";
import Architecture from "./pages/Architecture";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./pages/DashbaordLayout";
import Users from "./pages/Users";

export default function App() {
  return (
    <Router className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER GLOBAL */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/architecture" element={<Architecture />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </Router>
  );
}
