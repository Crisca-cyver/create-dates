import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where,
  orderBy 
} from 'firebase/firestore';
import { db } from './config';

// Interfaz para el producto
export interface Product {
  id?: string;
  name: string;
  category: string;
  brand: string;
  price?: number;
  description?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Interfaz para la categoría
export interface Category {
  id?: string;
  name: string;
  description?: string;
}

// Interfaz para la marca
export interface Brand {
  id?: string;
  name: string;
  description?: string;
}

// Colecciones de Firestore
const PRODUCTS_COLLECTION = 'products';
const CATEGORIES_COLLECTION = 'categories';
const BRANDS_COLLECTION = 'brands';

// Servicio de Productos
export const productService = {
  // Obtener todos los productos
  async getAllProducts(): Promise<Product[]> {
    try {
      const querySnapshot = await getDocs(collection(db, PRODUCTS_COLLECTION));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
    } catch (error) {
      console.error('Error al obtener productos:', error);
      throw error;
    }
  },

  // Obtener productos por categoría
  async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        where('category', '==', category),
        orderBy('name')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
    } catch (error) {
      console.error('Error al obtener productos por categoría:', error);
      throw error;
    }
  },

  // Obtener productos por marca
  async getProductsByBrand(brand: string): Promise<Product[]> {
    try {
      const q = query(
        collection(db, PRODUCTS_COLLECTION),
        where('brand', '==', brand),
        orderBy('name')
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
    } catch (error) {
      console.error('Error al obtener productos por marca:', error);
      throw error;
    }
  },

  // Agregar un nuevo producto
  async addProduct(product: Omit<Product, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error al agregar producto:', error);
      throw error;
    }
  },

  // Actualizar un producto
  async updateProduct(id: string, product: Partial<Product>): Promise<void> {
    try {
      const docRef = doc(db, PRODUCTS_COLLECTION, id);
      await updateDoc(docRef, {
        ...product,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      throw error;
    }
  },

  // Eliminar un producto
  async deleteProduct(id: string): Promise<void> {
    try {
      const docRef = doc(db, PRODUCTS_COLLECTION, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      throw error;
    }
  },

  // Obtener todas las categorías
  async getAllCategories(): Promise<Category[]> {
    try {
      const querySnapshot = await getDocs(collection(db, CATEGORIES_COLLECTION));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Category[];
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      throw error;
    }
  },

  // Agregar una nueva categoría
  async addCategory(category: Omit<Category, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, CATEGORIES_COLLECTION), {
        ...category,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error al agregar categoría:', error);
      throw error;
    }
  },

  // Actualizar una categoría
  async updateCategory(id: string, category: Partial<Category>): Promise<void> {
    try {
      const docRef = doc(db, CATEGORIES_COLLECTION, id);
      await updateDoc(docRef, {
        ...category,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error al actualizar categoría:', error);
      throw error;
    }
  },

  // Eliminar una categoría
  async deleteCategory(id: string): Promise<void> {
    try {
      const docRef = doc(db, CATEGORIES_COLLECTION, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error al eliminar categoría:', error);
      throw error;
    }
  },

  // Obtener todas las marcas
  async getAllBrands(): Promise<Brand[]> {
    try {
      const querySnapshot = await getDocs(collection(db, BRANDS_COLLECTION));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Brand[];
    } catch (error) {
      console.error('Error al obtener marcas:', error);
      throw error;
    }
  },

  // Agregar una nueva marca
  async addBrand(brand: Omit<Brand, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, BRANDS_COLLECTION), {
        ...brand,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error al agregar marca:', error);
      throw error;
    }
  },

  // Actualizar una marca
  async updateBrand(id: string, brand: Partial<Brand>): Promise<void> {
    try {
      const docRef = doc(db, BRANDS_COLLECTION, id);
      await updateDoc(docRef, {
        ...brand,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error al actualizar marca:', error);
      throw error;
    }
  },

  // Eliminar una marca
  async deleteBrand(id: string): Promise<void> {
    try {
      const docRef = doc(db, BRANDS_COLLECTION, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error al eliminar marca:', error);
      throw error;
    }
  }
}; 