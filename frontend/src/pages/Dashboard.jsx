export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-600 mt-2">
          Système utilisateur connecté en environnement fullstack.
        </p>
      </div>

      {/* USER INFO */}
      <div className="bg-indigo-600 text-white p-6 rounded-xl">
        <h3 className="font-semibold mb-2">Session utilisateur</h3>

        <p><strong>Nom:</strong> {user?.fullname}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      {/* STATS SYSTEM (SaaS DEMO STYLE) */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">API Status</p>
          <p className="text-green-600 font-bold">Online</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Backend</p>
          <p className="font-bold">Node.js Active</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Environment</p>
          <p className="font-bold">Development</p>
        </div>

      </div>

      {/* QUICK NAV */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Navigation</h3>

        <div className="flex gap-3 flex-wrap">

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Voir utilisateurs API
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Logs système
          </button>

          <button className="border px-4 py-2 rounded-lg">
            Documentation
          </button>

        </div>
      </div>

    </div>
  );
}