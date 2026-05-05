import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-linear-to-br from-blue-700 via-indigo-800 to-purple-800 text-white py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            User Registration App
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Une application fullstack moderne conçue pour démontrer un système d’authentification complet,
            intégrant React, Node.js, Docker et une pipeline CI/CD avec GitHub Actions.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <button
              onClick={() => navigate("/register")}
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Commencer
            </button>

            <button
              onClick={() => navigate("/login")}
              className="bg-white/10 border border-white/30 px-6 py-3 rounded-lg hover:bg-white/20 transition"
            >
              Se connecter
            </button>

          </div>

        </div>

      </section>

      {/* ABOUT PROJECT */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          À propos du projet
        </h2>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4 text-gray-700 leading-relaxed">

          <p>
            Ce projet a été conçu dans un objectif d’apprentissage avancé du développement fullstack
            et des pratiques DevOps modernes.
          </p>

          <p>
            Il simule une application réelle d’authentification utilisateur avec une architecture séparée :
            frontend React, backend Node.js et infrastructure containerisée avec Docker.
          </p>

          <p>
            L’objectif est de comprendre comment une application passe du développement local
            jusqu’à une automatisation complète du déploiement.
          </p>

        </div>

      </section>

      {/* WHY THIS PROJECT */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Pourquoi ce projet ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-600 mb-2">
              Apprentissage concret
            </h3>
            <p className="text-gray-600">
              Transformer la théorie (Docker, CI/CD) en projet réel fonctionnel.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-600 mb-2">
              Vision architecture
            </h3>
            <p className="text-gray-600">
              Comprendre la séparation frontend / backend / infrastructure.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-600 mb-2">
              Niveau professionnel
            </h3>
            <p className="text-gray-600">
              Se rapprocher des standards utilisés en entreprise.
            </p>
          </div>

        </div>

      </section>

      {/* STACK */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Stack technique
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-600">Frontend</h3>
            <p className="text-gray-600 mt-2">
              React, Vite, TailwindCSS, React Router, Axios
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-600">Backend</h3>
            <p className="text-gray-600 mt-2">
              Node.js, Express, API REST, JWT auth
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-600">DevOps</h3>
            <p className="text-gray-600 mt-2">
              Docker, Docker Compose, GitHub Actions CI/CD
            </p>
          </div>

        </div>

      </section>

      {/* PERSONAL BLOCK (TRÈS IMPORTANT POUR PORTFOLIO) */}
      <section className="bg-gray-900 text-white py-16 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl font-bold mb-4">
            À propos du développeur
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Je développe ce projet dans un cadre d’apprentissage personnel orienté vers les pratiques modernes
            du développement logiciel et du DevOps.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            L’objectif est de maîtriser progressivement les outils utilisés en entreprise
            et de construire une base solide pour des systèmes plus complexes et distribués.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Tester l’application
        </h2>

        <p className="text-gray-600 mb-6">
          Crée un compte ou connecte-toi pour tester le système d’authentification.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            S’inscrire
          </button>

          <button
            onClick={() => navigate("/login")}
            className="border px-6 py-3 rounded-lg hover:border-blue-500 hover:text-blue-600 transition"
          >
            Se connecter
          </button>

        </div>

      </section>

    </div>
  );
}