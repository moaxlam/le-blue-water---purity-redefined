import React, { useState, useEffect } from 'react';

import bottle1 from './bottle1.png';
import bottle2 from './bottle2.png';
import bottle3 from './bottle3.png';
import bottle4 from './bottle4.png';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueDetails } from './components/ValueDetails';
import { Proof } from './components/Proof';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { ProductsGrid } from './components/ProductsGrid';
import { ProductDetail } from './components/ProductDetail';
import { FeaturesPage } from './components/FeaturesPage';
import { ContactPage } from './components/ContactPage';
import { OrderForm } from './components/OrderForm';
import { Page, Product } from './types';

const PRODUCTS: Product[] = [
  {
    id: '1-5l',
    name: '1.5 LTR Bottle',
    sizeLabel: 'Premium Case',
    startingPrice: '5.00 AED',
    image: bottle1,
    imageWidth: 225,
    imageHeight: 445,
    description:
      'The standard for home and family hydration. Our 1.5 LTR bottles offer the perfect balance of volume and purity.',
    variants: [
      { label: '1 case 6 Bottles', price: '4.00 AED + TAX 5%' },
      { label: '1 case 12 Bottles', price: '9.00 AED + TAX 5%' }
    ],
    specs: { ph: '7.2', sodium: 'Low', tds: '110 ppm' }
  },
  {
    id: '500ml',
    name: '500 ML Bottle',
    sizeLabel: 'On-the-go Classic',
    startingPrice: '3.00 AED',
    image: bottle2,
    imageWidth: 190,
    imageHeight: 360,
    description:
      'Designed for an active lifestyle. Perfect for gym, office, or travel.',
    variants: [
      { label: '1 case 12 Bottles', price: '4.00 AED + TAX 5%' },
      { label: '1 case 24 Bottles', price: '9.00 AED + TAX 5%' }
    ],
    specs: { ph: '7.2', sodium: 'Low', tds: '110 ppm' }
  },
  {
    id: '330ml',
    name: '330 ML Elite',
    sizeLabel: 'Event & Hospitality',
    startingPrice: '2.00 AED',
    image: bottle3,
    imageWidth: 170,
    imageHeight: 320,
    description:
      'Elegant and compact. Preferred by hotels and premium events.',
    variants: [
      { label: '1 case 24 Bottles (Standard)', price: '8.00 AED + TAX 5%' },
      { label: '1 case 24 Bottles (Premium)', price: '8.50 AED + TAX 5%' }
    ],
    specs: { ph: '7.2', sodium: 'Low', tds: '110 ppm' }
  },
  {
    id: '100ml-cup',
    name: '100 ML CUP',
    sizeLabel: 'Quick Hydration',
    startingPrice: '1.00 AED',
    image: bottle4,
    imageWidth: 140,
    imageHeight: 220,
    description:
      'Hygienically sealed cups for hospitals, events, and public spaces.',
    variants: [
      { label: '1 case = 40 Cups', price: '7.00 AED + TAX 5%' }
    ],
    specs: { ph: '7.2', sodium: 'Low', tds: '110 ppm' }
  }
];


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => setCurrentPage('order')} />
            <ValueDetails onLearnMore={() => setCurrentPage('features')} />
            <ProductsGrid products={PRODUCTS} onSelect={navigateToProduct} />
            <Proof />
            <CallToAction onOrderClick={() => setCurrentPage('order')} />
          </>
        );
      case 'features':
        return <FeaturesPage />;
      case 'products':
        return (
          <ProductsGrid
            products={PRODUCTS}
            onSelect={navigateToProduct}
            title="OFFICIAL PRODUCT RANGE"
          />
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetail
            product={selectedProduct}
            onOrder={() => setCurrentPage('order')}
            onBack={() => setCurrentPage('products')}
          />
        ) : (
          <Hero onCtaClick={() => setCurrentPage('order')} />
        );
      case 'contact':
        return <ContactPage />;
      case 'order':
        return <OrderForm />;
      default:
        return <Hero onCtaClick={() => setCurrentPage('order')} />;
    }
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-[#010409] text-white">
      <div
        className="fixed inset-0 pointer-events-none vercel-gradient transition-opacity duration-1000"
        style={{ opacity: Math.min(1, scrollY / 300 + 0.5) }}
      />

      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      <div className="relative z-10">
        {renderPage()}
        <Footer onNavigate={setCurrentPage} />
      </div>
    </main>
  );
};

export default App;
