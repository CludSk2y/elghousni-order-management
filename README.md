# 🫒 Elghousni Order Management System (OMS)

Application web Single-Page (SPA) développée pour digitaliser le flux des commandes de la **Coopérative Agricole Elghousni** (Tanger, Maroc). Conçue pour remplacer la saisie papier par une interface rapide, fluide et sans erreur.

---

## ⚡ Fonctionnalités Clés

- **Catalogue Dynamique :** Parcourez l'ensemble des produits du terroir (huiles, olives, miels, dérivés).
- **Saisie Assistée :** Formulaire intelligent de création de commande avec calcul automatique et instantané des montants.
- **Tableau de Bord & Filtrage :** Visualisez l'état global des commandes et filtrez-les en un clic (*En attente*, *Préparée*, *Livrée*).
- **CRUD Simplifié :** Modification du cycle de vie d'une commande et suppression sécurisée.
- **Design Responsive :** Interface adaptée à l'utilisation quotidienne du personnel en coopérative.

---

## 🏗️ Architecture Technique

L'application repose sur une architecture de composants React découplée et réutilisable :

```text
src/
├── components/
│   ├── App.jsx             # État global & routeur principal
│   ├── FilterBar.jsx       # Filtrage dynamique des statuts
│   ├── OrderCard.jsx       # Carte individuelle (actions & affichage)
│   ├── OrderForm.jsx       # Formulaire de nouvelle commande
│   ├── OrderList.jsx       # Conteneur de la liste des commandes
│   ├── OrderSummary.jsx    # Calcul et affichage des totaux de la commande
│   ├── ProductSelector.jsx # Gestion du panier et des quantités
│   └── StatusBadge.jsx     # Composant visuel des statuts
├── data/
│   └── products.js         # Base de données mockée du catalogue
└── App.css                 # Styles et charte graphique

🚀 Démarrage Rapide
Prérequis
Assurez-vous d'avoir installé Node.js sur votre machine.

Installation
Cloner le dépôt :

Bash
git clone [https://github.com/votre-nom/elghousni-order-management.git](https://github.com/votre-nom/elghousni-order-management.git)
Accéder au répertoire du projet :

Bash
cd elghousni-order-management
Installer les dépendances :

Bash
npm install
Lancer le serveur de développement :

Bash
npm run dev
📐 Méthodologie & Outils
Gestion de Projet : Suivi itératif via Jira et GitHub Projects (Méthode Kanban : À Faire, En Cours, Terminé).

UI/UX Design : Maquettage préalable sous Figma pour respecter l'identité visuelle de la coopérative.

Concepts React mobilisés :

Gestion d'état avec useState

Manipulation d'événements (onChange, onSubmit, onClick)

Rendu de listes avec .map() et clés uniques (key)

Passage de données descendant via les props et remontée par fonctions callbacks.

👤 Auteur
Projet réalisé dans le cadre de la mission de développement frontend pour la Coopérative Elghousni.
