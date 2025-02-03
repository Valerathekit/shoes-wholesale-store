import { useState } from "react";

export default function App() {
  const [products] = useState([
    { id: 1, name: "Кросівки Nike", price: "1500 грн", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Туфлі Clarks", price: "1800 грн", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Черевики Timberland", price: "2000 грн", image: "https://via.placeholder.com/150" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Shoes Wholesale Store</h1>
          <input
            type="text"
            placeholder="Пошук товарів..."
            className="border rounded-md p-2 w-64"
          />
        </div>
      </header>

      <main className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Наші товари</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded-md hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Замовити
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Shoes Wholesale Store. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  );
}