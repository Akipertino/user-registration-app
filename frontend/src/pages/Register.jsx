import { useState } from "react";
import axios from "axios";
import api from "../services.js/api";

export default function Register() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null)
    setMessage(null);
    try {
      const res = await api.post("/users/", form);
      console.log(res);
      setMessage(res.data?.message);
    } catch (err) {
      setError(err.response?.data?.message || err.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 px-4">
      {/* CARD */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        {/* HEADER */}
        <h1 className="text-3xl font-bold text-center">Inscription</h1>

        <p className="text-center text-white/70 mt-2 mb-8">
          Crée ton compte pour tester le système d’authentification
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="fullname"
            placeholder="Nom utilisateur"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
          />
        {error && <p className="text-red-300 text-end">{error}</p>}
        {message && <p className="text-green-500 text-end">{message}</p>}
          <button
            type="submit"
            disabled={loading || !form.password}
            className={`w-full font-semibold hover:cursor-pointer py-3 rounded-lg transition ${
              loading || !form.password
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-white text-indigo-700 hover:bg-gray-100"
            }`}
          >
            {loading ? "Création du compte en cours..." : "Créer le compte"}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-white/60 text-sm mt-6">
          User Registration App — React • Node.js • Docker • CI/CD
        </p>
      </div>
    </div>
  );
}
