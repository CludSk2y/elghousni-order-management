function OrderSummary({ products }) {
  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  return (
    <div className="order-summary">
      <h3>Résumé de la commande</h3>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} x {p.quantity} = {p.price * p.quantity} DH
          </li>
        ))}
      </ul>
      <p>Total général: {total} DH</p>
    </div>
  );
}

export default OrderSummary;
