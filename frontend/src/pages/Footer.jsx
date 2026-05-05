import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* BRAND */}
          <div className="space-y-3 max-w-sm">

            <h2 className="text-lg font-semibold text-gray-900">
              <span className="text-blue-600 font-bold">User</span>RegApp
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Application fullstack d’authentification utilisateur construite
              avec React, Node.js, Docker et GitHub Actions.
            </p>

          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-8 text-sm text-gray-600">

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Navigation</h3>
              <Link to="/" className="block hover:text-gray-900">Accueil</Link>
              <Link to="/about" className="block hover:text-gray-900">À propos</Link>
              <Link to="/login" className="block hover:text-gray-900">Connexion</Link>
              <Link to="/register" className="block hover:text-gray-900">Inscription</Link>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Projet</h3>
              <p className="hover:text-gray-900">Frontend React</p>
              <p className="hover:text-gray-900">Backend Node.js</p>
              <p className="hover:text-gray-900">Docker</p>
              <p className="hover:text-gray-900">CI/CD GitHub Actions</p>
            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} User Registration App. Tous droits réservés.
          </p>

          <p className="text-xs text-gray-500">
            Projet portfolio — Fullstack & DevOps
          </p>

        </div>

      </div>

    </footer>
  );
}