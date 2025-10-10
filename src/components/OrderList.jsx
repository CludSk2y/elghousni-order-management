import React from "react";
import StatusBadge from "./StatusBadge";

export default function OrderList({ orders, onDeleteOrder, onUpdateStatus }) {
  if (orders.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#8F8A42", padding: "20px" }}>
        Aucune commande pour le moment à Souk El Had, Agadir.
      </p>
    );
  }

  return (
    <div className="card">
      <h3 style={{ color: "#4A5228", marginBottom: "15px" }}>
        Registre des Commandes Récentes
      </h3>
      <table
        style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}
      >
        <thead>
          <tr style={{ borderBottom: "2px solid #D4C870", color: "#4A5228" }}>
            <th style={{ padding: "10px" }}>Réf</th>
            <th style={{ padding: "10px" }}>Client</th>
            <th style={{ padding: "10px" }}>Produit</th>
            <th style={{ padding: "10px" }}>Statut</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} style={{ borderBottom: "1px solid #eee" }}>
              <td
                style={{
                  padding: "10px",
                  fontWeight: "bold",
                  color: "#6B7340",
                }}
              >
                {order.ref}
              </td>
              <td style={{ padding: "10px" }}>{order.client}</td>
              <td style={{ padding: "10px" }}>
                {order.product} ({order.quantity})
              </td>
              <td style={{ padding: "10px" }}>
                <StatusBadge status={order.status} />
              </td>
              <td style={{ padding: "10px" }}>
                <select
                  value={order.status}
                  onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                  style={{
                    padding: "5px",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                    marginRight: "8px",
                  }}
                >
                  <option value="En attente">En attente</option>
                  <option value="Préparée">Préparée</option>
                  <option value="Livrée">Livrée</option>
                </select>
                <button
                  onClick={() => onDeleteOrder(order.id)}
                  style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
