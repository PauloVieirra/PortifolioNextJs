// pages/index.js

import React from 'react';
import ItemGrid from '../Data/ItemGrid';
import styles from '../styles/ItemGrid.module.css';
import Image from 'next/image';

const Certification = () => {
  const itens = [
    {
      nome: 'Item 1',
      descricao: 'Descrição do Item 1',
      icon: './images/terminologia.png',
      imagemFullScreen: '/imagem1.jpg',
      url: 'https://www.exemplo.com/item1',
    },
    {
      nome: 'Item 2',
      descricao: 'Descrição do Item 2',
      icon: './images/componetsI.png',
      imagemFullScreen: '/imagem2.jpg',
      url: 'https://www.exemplo.com/item2',
    },
    {
        nome: 'Item 1',
        descricao: 'Descrição do Item 1',
        icon: './images/componentsII.png',
        imagemFullScreen: '/imagem1.jpg',
        url: 'https://www.exemplo.com/item1',
      },
      {
        nome: 'Item 2',
        descricao: 'Descrição do Item 2',
        icon: './images/uxfundation.png',
        imagemFullScreen: '/imagem2.jpg',
        url: 'https://www.exemplo.com/item2',
      },
      {
        nome: 'Item 1',
        descricao: 'Descrição do Item 1',
        icon: './images/wireframe.png',
        imagemFullScreen: './images/wireframe.png',
        url: 'https://www.exemplo.com/item1',
      },
      {
        nome: 'Item 1',
        descricao: 'Descrição do Item 1',
        icon: './images/certux.png',
        imagemFullScreen: './images/wireframe.png',
        url: 'https://www.exemplo.com/item1',
      },
     
  ];

  return (
    <div>
      <ItemGrid items={itens} />
    </div>
  );
};

export default Certification;
