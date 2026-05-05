import { useEffect, useState } from "react";
import api from "../services.js/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("table"); // table | grid

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users/");
        setUsers(res.data?.users || []);
      } catch (err) {
        console.log(err);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const hasUsers = Array.isArray(users) && users.length > 0;

  if (loading) {
    return (
      <p className="text-gray-500">
        Chargement des utilisateurs...
      </p>
    );
  }

  return (
    <div className="space-y-6">

      {/* HEADER + TOGGLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Liste des utilisateurs
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => setView("table")}
            className={`px-3 py-1 rounded transition ${
              view === "table"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Table
          </button>

          <button
            onClick={() => setView("grid")}
            className={`px-3 py-1 rounded transition ${
              view === "grid"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Grille
          </button>
        </div>
      </div>

      {/* EMPTY STATE GLOBAL */}
      {!hasUsers && (
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          Aucun utilisateur enregistré pour le moment
        </div>
      )}

      {/* TABLE VIEW */}
      {view === "table" && hasUsers && (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Nom complet</th>
                <th className="p-3">Email</th>
                <th className="p-3">Password</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{u.fullname}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3 text-gray-500">
                    {u.password}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* GRID VIEW */}
      {view === "grid" && hasUsers && (
        <div className="grid md:grid-cols-3 gap-4">
          {users.map((u, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow space-y-2"
            >
              <p className="font-bold text-lg">
                {u.fullname}
              </p>

              <p className="text-gray-600">
                {u.email}
              </p>

              <p className="text-sm text-gray-400 break-all">
                {u.password}
              </p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}