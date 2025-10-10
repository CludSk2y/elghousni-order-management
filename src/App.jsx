import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import "./App.css";

export default function App() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      ref: "CMD-2026-101",
      client: "Maison du Terroir & Délices",
      product: "Huile d'Olive Extra Vierge",
      quantity: 20,
      status: "Préparée",
    },
    {
      id: 2,
      ref: "CMD-2026-102",
      client: "Riad Jardin Secret & Spa",
      product: "Huile d'Argan Torréfiée",
      quantity: 10,
      status: "En attente",
    },
  ]);

  const handleAddOrder = (newOrder) => {
    setOrders([newOrder, ...orders]);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleUpdateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order,
      ),
    );
  };

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "En attente").length;
  const preparedOrders = orders.filter((o) => o.status === "Préparée").length;

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo">🌿 Coopérative Elghousni</div>
          <div className="sidebar-menu">
            <a href="#" className="active">
              📊 Gestion des Commandes
            </a>
            <a href="#">📦 Catalogue & Stocks</a>
            <a href="#">🚚 Suivi des Livraisons</a>
            <a href="#">⚙️ Paramètres du Domaine</a>
          </div>
        </div>
        <div
          style={{
            fontSize: "0.85rem",
            color: "#D4C870",
            lineHeight: "1.5",
            background: "rgba(0,0,0,0.15)",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <strong>Souk El Had, Agadir</strong>[cite: 6]
          <br />
          Tél : 06 88 44 61 29[cite: 6]
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="header-title">Gestion des Commandes & Facturation</h1>

        {/* Quick Stats Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <div>
              <h4>Total Commandes</h4>
              <span>{totalOrders}</span>
            </div>
            <span style={{ fontSize: "1.8rem" }}>📋</span>
          </div>
          <div className="stat-card" style={{ borderTopColor: "#F9E79F" }}>
            <div>
              <h4>En Attente</h4>
              <span>{pendingOrders}</span>
            </div>
            <span style={{ fontSize: "1.8rem" }}>⏳</span>
          </div>
          <div className="stat-card" style={{ borderTopColor: "#A9DFBF" }}>
            <div>
              <h4>Préparées</h4>
              <span>{preparedOrders}</span>
            </div>
            <span style={{ fontSize: "1.8rem" }}>✨</span>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="dashboard-grid">
          <OrderForm onAddOrder={handleAddOrder} />
          <OrderList
            orders={orders}
            onDeleteOrder={handleDeleteOrder}
            onUpdateStatus={handleUpdateStatus}
          />
        </div>
      </main>
    </div>
  );
}
