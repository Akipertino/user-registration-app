import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded transition ${
      isActive
        ? "bg-white text-indigo-700 font-semibold"
        : "hover:bg-indigo-600"
    }`;

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-indigo-700 text-white p-5">

        <h1 className="text-xl font-bold mb-8">
          User Registration App
        </h1>

        <nav className="space-y-2">

          <NavLink to="/dashboard" end className={linkClass}>
            Profil
          </NavLink>

          <NavLink to="/dashboard/users" className={linkClass}>
            Users API
          </NavLink>

        </nav>

      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="bg-white shadow p-4 flex justify-between items-center">

          <div className="text-sm text-gray-600">
            Connecté :{" "}
            <span className="font-semibold text-black">
              {user?.fullname || "Guest"}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Déconnexion
          </button>

        </header>

        {/* CONTENT */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>

      </div>

    </div>
  );
}