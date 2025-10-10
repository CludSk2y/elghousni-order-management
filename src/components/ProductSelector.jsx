import { products } from "../assets/Data/product.js";

function ProductSelector({ selectedProducts, setSelectedProducts }) {
  const handleChange = (id, quantity) => {
    const existing = selectedProducts.find((p) => p.id === id);
    if (existing) {
      setSelectedProducts(
        selectedProducts.map((p) => (p.id === id ? { ...p, quantity } : p))
      );
    } else {
      const product = products.find((p) => p.id === id);
      setSelectedProducts([...selectedProducts, { ...product, quantity }]);
    }
  };

  return (
    <div className="productselector">
      {products.map((p) => (
        <div className="productditelise" key={p.id}>
          <span>
            {p.name} ({p.price} DH)
          </span>
          <input
            type="number"
            min="0"
            value={selectedProducts.find((s) => s.id === p.id)?.quantity || 0}
            onChange={(e) => handleChange(p.id, Number(e.target.value))}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductSelector;
