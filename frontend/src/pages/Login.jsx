import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("YOUR_API_URL/auth/login", form);
      alert("Connexion réussie");
    } catch (err) {
      alert("Erreur de connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 text-white">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Connexion
        </h1>

        <p className="text-center text-white/70 mb-8">
          Accédez à votre espace utilisateur
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

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

          <button
            type="submit"
            className="w-full bg-white text-blue-700 font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Se connecter
          </button>

        </form>

        {/* FOOT NOTE */}
        <p className="text-center text-white/60 text-sm mt-6">
          Projet de démonstration fullstack DevOps
        </p>

      </div>

    </div>
  );
}