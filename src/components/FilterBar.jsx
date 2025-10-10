
import React from "react";

function FilterBar({ statusFilter, setStatusFilter }) {
  return (
    <div className="filter-bar">
      <button
        className={statusFilter === "all" ? "active" : ""}
        onClick={() => setStatusFilter("all")}
      >
        Toutes
      </button>
      <button
        className={statusFilter === "pending" ? "active" : ""}
        onClick={() => setStatusFilter("pending")}
      >
        En attente
      </button>
      <button
        className={statusFilter === "prepared" ? "active" : ""}
        onClick={() => setStatusFilter("prepared")}
      >
        Préparée
      </button>
      <button
        className={statusFilter === "delivered" ? "active" : ""}
        onClick={() => setStatusFilter("delivered")}
      >
        Livrée
      </button>
    </div>
  );
}

export default FilterBar;
