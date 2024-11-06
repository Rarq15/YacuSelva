"use client"

import React from 'react';
import ProductList from './components/ui/product-list';
import styles from './page.module.css';
import Footer from './components/ui/footer';

export default function Page() {
  const products = [
    {
      id: 1,
      title: 'Agua de Mesa Yacu Selva',
      imageUrl: '/yacu-selva.png',
      price: 5,
      description: 'Reposición garrafa de agua 20L',
    },
    {
      id: 2,
      title: 'Agua de Mesa Yacu Selva',
      imageUrl: '/yacu-selva.png',
      price: 30,
      description: 'Garrafa de agua 20L',
    },
  ];

  const handleAddToCart = (productId: number) => {
    console.log(`Producto agregado al carrito: ID ${productId}`);
  };

  return (
    <>
      <main className={styles.main}>
        <h1>Nuestros Productos:</h1>
        <br />
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </main>
      <br />
      <Footer />
    </>
  );
}
