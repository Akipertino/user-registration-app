export default function Architecture() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-6xl mx-auto space-y-12">

        {/* TITLE */}
        <section>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Architecture & DevOps
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Cette page décrit l’architecture technique de l’application User Registration App,
            ainsi que les choix d’ingénierie et de déploiement utilisés dans le projet.
          </p>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Vue d’ensemble du système
          </h2>

          <p className="text-gray-700 leading-relaxed">
            L’application est construite selon une architecture fullstack séparée :
            un frontend React, un backend Node.js (API REST) et une infrastructure orientée conteneurs
            avec Docker et CI/CD automatisé.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mt-6">

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-sm text-gray-600 mt-2">
                React + TailwindCSS + React Router + Axios
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Backend</h3>
              <p className="text-sm text-gray-600 mt-2">
                Node.js + Express + API REST + Auth JWT
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Infrastructure</h3>
              <p className="text-sm text-gray-600 mt-2">
                Docker + Docker Compose + GitHub Actions CI/CD
              </p>
            </div>

          </div>

        </section>

        {/* FLOW */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Flux de fonctionnement
          </h2>

          <ol className="list-decimal pl-5 text-gray-700 space-y-2">
            <li>L’utilisateur s’inscrit via le frontend React</li>
            <li>La requête est envoyée à l’API Node.js</li>
            <li>Le backend traite et stocke les données utilisateur</li>
            <li>Une réponse est renvoyée au frontend</li>
            <li>Le système d’authentification gère la session utilisateur</li>
          </ol>

        </section>

        {/* DEVOPS PIPELINE */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Pipeline DevOps (CI/CD)
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Le projet intègre une approche DevOps avec automatisation du cycle de vie logiciel.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-6">

            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold">1. Code</h3>
              <p className="text-sm text-gray-600 mt-1">
                Développement local avec Git
              </p>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold">2. Build</h3>
              <p className="text-sm text-gray-600 mt-1">
                Construction des images Docker
              </p>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold">3. Test</h3>
              <p className="text-sm text-gray-600 mt-1">
                Validation automatisée (GitHub Actions)
              </p>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4">
              <h3 className="font-semibold">4. Deploy</h3>
              <p className="text-sm text-gray-600 mt-1">
                Déploiement conteneurisé
              </p>
            </div>

          </div>

        </section>

        {/* DESIGN DECISIONS */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Choix techniques
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>React pour une UI réactive et scalable</li>
            <li>Node.js pour la simplicité et la performance API</li>
            <li>TailwindCSS pour un design system rapide et cohérent</li>
            <li>Docker pour la reproductibilité des environnements</li>
            <li>GitHub Actions pour l’automatisation CI/CD</li>
          </ul>

        </section>

        {/* FINAL NOTE */}
        <section className="bg-gray-900 text-white p-8 rounded-xl">

          <h2 className="text-xl font-semibold">
            Objectif du projet
          </h2>

          <p className="text-gray-300 leading-relaxed mt-4">
            Ce projet a pour objectif de simuler une application moderne en conditions réelles,
            en intégrant à la fois développement frontend, backend et pratiques DevOps.
          </p>

          <p className="text-gray-400 mt-3 leading-relaxed">
            Il sert de base pour comprendre comment une application passe du code local à une infrastructure déployée et automatisée.
          </p>

        </section>

      </div>

    </div>
  );
}