import StatusBadge from "./StatusBadge.jsx";

function OrderCard({ order, changeStatus, deleteOrder }) {
  const total = order.products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  return (
    <div className="order-card">
      <h3>
        {order.client} - {order.phone}
      </h3>
      <ul>
        {order.products.map((p) => (
          <li key={p.id}>
            {p.name} x {p.quantity} = {p.price * p.quantity} DH
          </li>
        ))}
      </ul>
      <p>Total: {total} DH</p>
      <StatusBadge status={order.status} />
      <div className="order-buttons">
        <button onClick={() => changeStatus(order.id, "Livré")}>Livré</button>
        <button onClick={() => changeStatus(order.id, "Annulé")}>Annulé</button>
        <button onClick={() => deleteOrder(order.id)}>Supprimer</button>
      </div>
    </div>
  );
}

export default OrderCard;
