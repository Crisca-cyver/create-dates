import { productService } from './productService';

// Datos de ejemplo para categorías
export const sampleCategories = [
  { name: 'Cosméticos', description: 'Productos de belleza y cosméticos' },
  { name: 'Cuidado Personal', description: 'Productos de higiene personal' },
  { name: 'Higiene', description: 'Productos de limpieza e higiene' },
  { name: 'Belleza', description: 'Productos de belleza y cuidado' },
  { name: 'Cabello', description: 'Productos para el cuidado del cabello' },
  { name: 'Piel', description: 'Productos para el cuidado de la piel' },
  { name: 'Automotriz', description: 'Productos para automóviles' },
  { name: 'Repuestos', description: 'Repuestos y accesorios' },
  { name: 'Aceites', description: 'Aceites y lubricantes' },
  { name: 'Lubricantes', description: 'Lubricantes automotrices' },
  { name: 'Filtros', description: 'Filtros para vehículos' },
  { name: 'Herramientas', description: 'Herramientas y equipos' },
  { name: 'Alimentos', description: 'Productos alimenticios' },
  { name: 'Bebidas', description: 'Bebidas y refrescos' },
  { name: 'Limpieza', description: 'Productos de limpieza' },
  { name: 'Electrónicos', description: 'Productos electrónicos' },
  { name: 'Hogar', description: 'Productos para el hogar' },
  { name: 'Jardín', description: 'Productos para jardín' },
  { name: 'Ropa', description: 'Ropa y accesorios' }
];

// Datos de ejemplo para marcas
export const sampleBrands = [
  { name: 'Loreal', description: 'Productos de belleza Loreal' },
  { name: 'Molinos Cañuelas', description: 'Productos alimenticios' },
  { name: 'Edra', description: 'Productos de limpieza' },
  { name: 'Rinde dos', description: 'Productos de limpieza' },
  { name: 'Branca', description: 'Productos de limpieza' },
  { name: 'Cabrales', description: 'Productos alimenticios' },
  { name: 'Hileret', description: 'Productos de limpieza' },
  { name: 'Yovinessa', description: 'Productos de belleza' },
  { name: 'Yaguar', description: 'Productos automotrices' },
  { name: 'Castrol', description: 'Aceites y lubricantes' },
  { name: 'Mobil', description: 'Aceites y lubricantes' },
  { name: 'Shell', description: 'Combustibles y lubricantes' },
  { name: 'Total', description: 'Aceites y lubricantes' },
  { name: 'Repsol', description: 'Combustibles y lubricantes' },
  { name: 'Carrefour', description: 'Productos de supermercado' },
  { name: 'Nestlé', description: 'Productos alimenticios' },
  { name: 'Coca-Cola', description: 'Bebidas' },
  { name: 'Unilever', description: 'Productos de cuidado personal' },
  { name: 'P&G', description: 'Productos de cuidado personal' },
  { name: 'Kraft', description: 'Productos alimenticios' },
  { name: 'General Mills', description: 'Productos alimenticios' },
  { name: 'Mars', description: 'Productos alimenticios' }
];

// Datos de ejemplo para productos
export const sampleProducts = [
  // Productos Makro - Cosméticos
  { name: 'Shampoo Elvive Nutri Gloss', category: 'Cabello', brand: 'Loreal', price: 12.99, description: 'Shampoo para cabello brillante' },
  { name: 'Acondicionador Fructis Hidratación', category: 'Cabello', brand: 'Loreal', price: 10.50, description: 'Acondicionador hidratante' },
  { name: 'Tinte Nutrisse Castaño', category: 'Cabello', brand: 'Loreal', price: 15.99, description: 'Tinte para cabello castaño' },
  { name: 'Crema Excellence Creme', category: 'Cabello', brand: 'Loreal', price: 18.50, description: 'Crema para cabello seco' },
  { name: 'Gel Cor Fijación Extra', category: 'Cabello', brand: 'Loreal', price: 8.99, description: 'Gel para fijación extra' },
  { name: 'Detergente Edra Ropa Blanca', category: 'Limpieza', brand: 'Edra', price: 5.99, description: 'Detergente para ropa blanca' },
  { name: 'Lavandina Rinde Dos', category: 'Limpieza', brand: 'Rinde dos', price: 3.50, description: 'Lavandina concentrada' },
  { name: 'Jabón Branca Antibacterial', category: 'Higiene', brand: 'Branca', price: 2.99, description: 'Jabón antibacterial' },
  { name: 'Harina Cabrales 0000', category: 'Alimentos', brand: 'Cabrales', price: 4.50, description: 'Harina de trigo 0000' },
  { name: 'Desodorante Hileret Sport', category: 'Cuidado Personal', brand: 'Hileret', price: 6.99, description: 'Desodorante deportivo' },
  { name: 'Crema Facial Yovinessa', category: 'Piel', brand: 'Yovinessa', price: 9.99, description: 'Crema facial hidratante' },

  // Productos Yaguar - Automotriz
  { name: 'Aceite Yaguar 5W30', category: 'Aceites', brand: 'Yaguar', price: 25.99, description: 'Aceite sintético 5W30' },
  { name: 'Aceite Castrol Magnatec', category: 'Aceites', brand: 'Castrol', price: 28.50, description: 'Aceite con tecnología magnética' },
  { name: 'Aceite Mobil 1 0W20', category: 'Aceites', brand: 'Mobil', price: 32.99, description: 'Aceite sintético 0W20' },
  { name: 'Aceite Shell Helix HX7', category: 'Aceites', brand: 'Shell', price: 26.50, description: 'Aceite semisintético' },
  { name: 'Aceite Total Quartz 9000', category: 'Aceites', brand: 'Total', price: 24.99, description: 'Aceite de alto rendimiento' },
  { name: 'Filtro de Aceite Yaguar', category: 'Filtros', brand: 'Yaguar', price: 8.99, description: 'Filtro de aceite compatible' },
  { name: 'Filtro de Aire Castrol', category: 'Filtros', brand: 'Castrol', price: 12.50, description: 'Filtro de aire de alta calidad' },
  { name: 'Filtro de Combustible Mobil', category: 'Filtros', brand: 'Mobil', price: 15.99, description: 'Filtro de combustible' },
  { name: 'Lubricante Shell Grease', category: 'Lubricantes', brand: 'Shell', price: 18.50, description: 'Grasa lubricante' },
  { name: 'Lubricante Total Multi-Purpose', category: 'Lubricantes', brand: 'Total', price: 16.99, description: 'Lubricante multipropósito' },
  { name: 'Herramienta Yaguar Set Básico', category: 'Herramientas', brand: 'Yaguar', price: 45.99, description: 'Set básico de herramientas' },

  // Productos Maxi-Carrefour - Supermercado
  { name: 'Leche Carrefour Entera', category: 'Alimentos', brand: 'Carrefour', price: 2.99, description: 'Leche entera 1L' },
  { name: 'Cereal Nestlé Fitness', category: 'Alimentos', brand: 'Nestlé', price: 4.50, description: 'Cereal fitness con frutas' },
  { name: 'Coca-Cola Zero 2L', category: 'Bebidas', brand: 'Coca-Cola', price: 3.99, description: 'Coca-Cola Zero 2 litros' },
  { name: 'Shampoo Head & Shoulders', category: 'Cuidado Personal', brand: 'P&G', price: 7.99, description: 'Shampoo anticaspa' },
  { name: 'Desodorante Axe Dark Temptation', category: 'Cuidado Personal', brand: 'Unilever', price: 5.50, description: 'Desodorante para hombres' },
  { name: 'Detergente Ariel Líquido', category: 'Limpieza', brand: 'P&G', price: 6.99, description: 'Detergente líquido para ropa' },
  { name: 'Galletas Oreo Original', category: 'Alimentos', brand: 'Kraft', price: 3.50, description: 'Galletas Oreo original' },
  { name: 'Cereal Cheerios Miel', category: 'Alimentos', brand: 'General Mills', price: 4.99, description: 'Cereal Cheerios con miel' },
  { name: 'Chocolate M&M\'s', category: 'Alimentos', brand: 'Mars', price: 2.99, description: 'Chocolate M&M\'s coloridos' },
  { name: 'Aceite de Oliva Carrefour', category: 'Alimentos', brand: 'Carrefour', price: 8.99, description: 'Aceite de oliva extra virgen' },
  { name: 'Yogur Carrefour Natural', category: 'Alimentos', brand: 'Carrefour', price: 1.99, description: 'Yogur natural sin azúcar' }
];

// Función para poblar la base de datos con datos de ejemplo
export const populateSampleData = async () => {
  try {
    console.log('Iniciando población de datos de ejemplo...');

    // Agregar categorías
    console.log('Agregando categorías...');
    for (const category of sampleCategories) {
      await productService.addCategory(category);
    }

    // Agregar marcas
    console.log('Agregando marcas...');
    for (const brand of sampleBrands) {
      await productService.addBrand(brand);
    }

    // Agregar productos
    console.log('Agregando productos...');
    for (const product of sampleProducts) {
      await productService.addProduct(product);
    }

    console.log('¡Datos de ejemplo agregados exitosamente!');
  } catch (error) {
    console.error('Error al poblar datos de ejemplo:', error);
    throw error;
  }
}; 