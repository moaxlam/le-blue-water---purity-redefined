import React from 'react';

export type Page =
  | 'home'
  | 'features'
  | 'products'
  | 'contact'
  | 'order'
  | 'product-detail';

export interface ProductVariant {
  label: string;
  price: string;
}

export interface Product {
  id: string;
  name: string;
  sizeLabel: string;
  startingPrice: string;
  image: string;

  // 👇 per-image custom size
  imageWidth?: number;
  imageHeight?: number;

  description: string;
  variants: ProductVariant[];
  specs: {
    ph: string;
    sodium: string;
    tds: string;
  };
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
