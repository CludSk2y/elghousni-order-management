import React from "react";

export default function StatusBadge({ status }) {
  const getBadgeStyle = () => {
    switch (status) {
      case "En attente":
        return { backgroundColor: "#F9E79F", color: "#7D6608" };
      case "Préparée":
        return { backgroundColor: "#A9DFBF", color: "#145A32" };
      case "Livrée":
        return { backgroundColor: "#AED6F1", color: "#1B4F72" };
      default:
        return { backgroundColor: "#E5E7E9", color: "#2C3E50" };
    }
  };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "0.85rem",
        fontWeight: "700",
        textAlign: "center",
        whiteSpace: "nowrap",
        ...getBadgeStyle(),
      }}
    >
      {status}
    </span>
  );
}
