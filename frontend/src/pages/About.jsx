export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-5xl mx-auto space-y-12">

        {/* TITLE */}
        <section>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            À propos de ce projet
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            User Registration App est une application fullstack conçue pour simuler un système d’authentification
            moderne avec une architecture professionnelle et une approche DevOps.
          </p>
        </section>

        {/* PROJECT CONTEXT */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Contexte du projet
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Ce projet reproduit un système d’authentification utilisateur complet, avec un frontend React,
            un backend Node.js et une infrastructure pensée pour être conteneurisée avec Docker.
          </p>

          <p className="text-gray-700 leading-relaxed">
            L’objectif est de simuler un environnement réel de développement logiciel :
            séparation des responsabilités, API REST, gestion des utilisateurs et intégration DevOps.
          </p>

        </section>

        {/* WHY I BUILT IT */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Pourquoi j’ai construit ce projet
          </h2>

          <p className="text-gray-700 leading-relaxed">
            J’ai réalisé ce projet dans une démarche d’apprentissage structuré du développement fullstack
            et des pratiques DevOps modernes.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Après avoir étudié Docker et GitHub Actions, j’ai voulu dépasser les exercices théoriques
            pour construire une application complète, cohérente et proche d’un contexte professionnel.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Ce projet me permet de relier plusieurs compétences essentielles :
            développement frontend, backend, API design et automatisation des workflows.
          </p>

        </section>

        {/* ARCHITECTURE */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Architecture du système
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mt-4">

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-gray-600 text-sm mt-2">
                Application React avec TailwindCSS, React Router et Axios pour la communication API.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">Backend</h3>
              <p className="text-gray-600 text-sm mt-2">
                API Node.js (Express) gérant l’authentification et les utilisateurs.
              </p>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold">DevOps</h3>
              <p className="text-gray-600 text-sm mt-2">
                Containerisation Docker + pipeline CI/CD avec GitHub Actions.
              </p>
            </div>

          </div>

        </section>

        {/* WHAT I LEARNED */}
        <section className="bg-white p-8 rounded-xl shadow-sm space-y-4">

          <h2 className="text-xl font-semibold text-blue-600">
            Ce que ce projet m’a appris
          </h2>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Structurer une application fullstack proprement</li>
            <li>Connecter frontend et backend via API REST</li>
            <li>Gérer un flux d’authentification utilisateur</li>
            <li>Comprendre Docker et la containerisation</li>
            <li>Mettre en place une logique CI/CD avec GitHub Actions</li>
          </ul>

        </section>

        {/* PERSONAL SECTION */}
        <section className="bg-gray-900 text-white p-8 rounded-xl space-y-4">

          <h2 className="text-xl font-semibold">
            À propos de moi
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Je suis en phase d’apprentissage avancée du développement web et des pratiques DevOps.
            Mon objectif est de comprendre comment sont construites les applications modernes
            utilisées en entreprise.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Ce projet représente une étape importante dans mon parcours,
            car il me permet de relier théorie et pratique dans un système cohérent et fonctionnel.
          </p>

        </section>

        {/* CTA */}
        <section className="text-center space-y-4">

          <h2 className="text-2xl font-bold text-gray-800">
            Explorer le projet
          </h2>

          <p className="text-gray-600">
            Tester l’application ou consulter les autres sections pour comprendre l’architecture.
          </p>

        </section>

      </div>

    </div>
  );
}