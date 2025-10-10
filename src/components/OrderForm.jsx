import React, { useState } from 'react';

export default function OrderForm({ onAddOrder }) {
  const [client, setClient] = useState('');
  const [product, setProduct] = useState('Huile d\'Olive Extra Vierge');
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(150);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client.trim()) return;

    const newOrder = {
      id: Date.now(),
      ref: `CMD-2026-${Math.floor(100 + Math.random() * 900)}`,
      client,
      product,
      quantity,
      total,
      status: 'En attente',
      date: new Date().toLocaleDateString()
    };

    onAddOrder(newOrder);
    setClient('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="card" style={{ borderLeft: '5px solid #B8A84A' }}>
      <h3 style={{ color: '#4A5228', marginBottom: '15px' }}>Nouvelle Prise de Commande</h3>
      
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: '600' }}>Client / Destination</label>
        <input 
          type="text" 
          value={client} 
          onChange={(e) => setClient(e.target.value)} 
          placeholder="Ex: Épicerie Fine Agadir" 
          required
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #D4C870', background: '#FBF9F1' }}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: '600' }}>Produit</label>
        <select 
          value={product} 
          onChange={(e) => setProduct(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #D4C870', background: '#FBF9F1' }}
        >
          <option value="Huile d'Olive Extra Vierge">Huile d'Olive Extra Vierge (Bidon 5L)</option>
          <option value="Huile d'Argan Torréfiée">Huile d'Argan Torréfiée (Bouteille)</option>
          <option value="Miel d'Euphorbe">Miel d'Euphorbe Pur</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '5px', fontWeight: '600' }}>Quantité (Litres / Unités)</label>
        <input 
          type="number" 
          min="1" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #D4C870', background: '#FBF9F1' }}
        />
      </div>

      <button type="submit" className="btn-primary" style={{ width: '100%' }}>
        Valider & Générer la Commande
      </button>
    </form>
  );
}