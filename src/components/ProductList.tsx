import React, { useState, useEffect } from 'react';
import { Product, productService } from '../firebase/productService';

interface ProductListProps {
  category?: string;
  brand?: string;
  title?: string;
  onSelectionChange?: (selectedProducts: string[]) => void;
}

const ProductList: React.FC<ProductListProps> = ({ 
  category, 
  brand, 
  title = "Productos", 
  onSelectionChange 
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Cargar productos
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        let productsData: Product[] = [];

        if (category) {
          productsData = await productService.getProductsByCategory(category);
        } else if (brand) {
          productsData = await productService.getProductsByBrand(brand);
        } else {
          productsData = await productService.getAllProducts();
        }

        setProducts(productsData);
      } catch (err) {
        setError('Error al cargar productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category, brand]);

  // Manejar selección de productos
  const handleProductToggle = (productId: string) => {
    setSelectedProducts(prev => {
      const newSelection = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      
      // Notificar cambio de selección
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      }
      
      return newSelection;
    });
  };

  // Obtener nombres de productos seleccionados
  const getSelectedProductNames = (): string => {
    return selectedProducts
      .map(id => products.find(p => p.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  // Copiar al portapapeles
  const copyToClipboard = async () => {
    const selectedNames = getSelectedProductNames();
    if (selectedNames) {
      try {
        await navigator.clipboard.writeText(selectedNames);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
      }
    }
  };

  // Limpiar selección
  const clearSelection = () => {
    setSelectedProducts([]);
    if (onSelectionChange) {
      onSelectionChange([]);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex gap-2">
          {selectedProducts.length > 0 && (
            <>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copied ? '¡Copiado!' : 'Copiar'}
              </button>
              <button
                onClick={clearSelection}
                className="px-4 py-2 rounded-md text-sm font-medium bg-gray-500 text-white hover:bg-gray-600 transition-colors"
              >
                Limpiar
              </button>
            </>
          )}
        </div>
      </div>

      {/* Contador de seleccionados */}
      {selectedProducts.length > 0 && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">{selectedProducts.length}</span> producto(s) seleccionado(s)
          </p>
        </div>
      )}

      {/* Campo de texto con productos seleccionados */}
      {selectedProducts.length > 0 && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Productos Seleccionados:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={getSelectedProductNames()}
              readOnly
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700"
              placeholder="Ningún producto seleccionado"
            />
            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {copied ? '✓' : '📋'}
            </button>
          </div>
        </div>
      )}

      {/* Lista de productos */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {products.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No hay productos disponibles</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                id={product.id}
                checked={selectedProducts.includes(product.id!)}
                onChange={() => handleProductToggle(product.id!)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor={product.id}
                className="ml-3 flex-1 cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-medium">{product.name}</span>
                  <div className="flex gap-2 text-sm text-gray-500">
                    {product.brand && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {product.brand}
                      </span>
                    )}
                    {product.price && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        ${product.price}
                      </span>
                    )}
                  </div>
                </div>
                {product.description && (
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                )}
              </label>
            </div>
          ))
        )}
      </div>

      {/* Información adicional */}
      <div className="mt-4 text-sm text-gray-500">
        <p>Total de productos: {products.length}</p>
        {selectedProducts.length > 0 && (
          <p>Seleccionados: {selectedProducts.length}</p>
        )}
      </div>
    </div>
  );
};

export default ProductList; 