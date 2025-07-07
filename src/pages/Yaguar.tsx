import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Yaguar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const categories = [
    'Automotriz',
    'Repuestos',
    'Aceites',
    'Lubricantes',
    'Filtros',
    'Herramientas'
  ];

  const brands = [
    'Yaguar',
    'Castrol',
    'Mobil',
    'Shell',
    'Total',
    'Repsol'
  ];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedBrand('');
    setSelectedProducts([]);
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
    setSelectedProducts([]);
  };

  const handleSelectionChange = (products: string[]) => {
    setSelectedProducts(products);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="text-center mb-8 p-5 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl text-white">
        <h1 className="text-3xl font-bold mb-2">Yaguar</h1>
        <p className="text-lg opacity-90 m-0">Gestión de productos para Yaguar</p>
      </div>
      
      <div className="flex flex-col gap-5">
        {/* Filtros */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filtros</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category-select" className="font-semibold text-gray-700 text-sm block mb-2">
                Categoría:
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-orange-500 focus:outline-none bg-gray-50"
              >
                <option value="">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="brand-select" className="font-semibold text-gray-700 text-sm block mb-2">
                Marca:
              </label>
              <select
                id="brand-select"
                value={selectedBrand}
                onChange={handleBrandChange}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-base transition-colors focus:border-orange-500 focus:outline-none bg-gray-50"
              >
                <option value="">Todas las marcas</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Información de filtros activos */}
          {(selectedCategory || selectedBrand) && (
            <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <p className="text-orange-800 font-semibold">
                Filtros activos:
                {selectedCategory && (
                  <span className="text-orange-600 ml-2">Categoría: {selectedCategory}</span>
                )}
                {selectedBrand && (
                  <span className="text-red-600 ml-2">Marca: {selectedBrand}</span>
                )}
              </p>
              {selectedProducts.length > 0 && (
                <p className="text-orange-700 text-sm mt-2">
                  Productos seleccionados: {selectedProducts.length}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Lista de productos */}
        <ProductList
          category={selectedCategory || undefined}
          brand={selectedBrand || undefined}
          title="Productos Yaguar"
          onSelectionChange={handleSelectionChange}
        />
      </div>
    </div>
  );
};

export default Yaguar; 