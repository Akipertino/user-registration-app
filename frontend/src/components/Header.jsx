import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    `transition font-medium ${
      isActive
        ? "text-gray-900 border-b-2 border-blue-600 pb-1"
        : "text-gray-500 hover:text-gray-900"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* BRAND */}
        <NavLink to="/" className="text-xl font-semibold text-gray-900">
          <span className="text-blue-600 font-bold">User</span>RegApp
        </NavLink>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-10 text-base">
          <NavLink to="/" className={linkClass}>
            Accueil
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            À propos
          </NavLink>
          <NavLink to="/architecture" className={linkClass}>
            Architecture
          </NavLink>
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/login"
            className="hidden sm:inline-flex text-base text-gray-600 hover:text-gray-900 transition px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Sign in
          </NavLink>

          <NavLink
            to="/register"
            className="text-base font-semibold px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition shadow-sm"
          >
            Get started
          </NavLink>
        </div>
      </div>
    </header>
  );
}
