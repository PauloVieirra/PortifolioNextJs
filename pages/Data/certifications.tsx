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
      url: 'https://app.uxcel.com/certificates/VO7P6PNLQLP8',
    },
    {
      nome: 'Item 2',
      descricao: 'Descrição do Item 2',
      icon: './images/componetsI.png',
      imagemFullScreen: '/imagem2.jpg',
      url: 'https://app.uxcel.com/certificates/LC1M0R3HFCDG',
    },
    {
        nome: 'Item 1',
        descricao: 'Descrição do Item 1',
        icon: './images/componentsII.png',
        imagemFullScreen: '/imagem1.jpg',
        url: 'https://app.uxcel.com/certificates/Z3G2G75ZI9NL',
      },
      {
        nome: 'Item 2',
        descricao: 'Descrição do Item 2',
        icon: './images/uxfundation.png',
        imagemFullScreen: '/imagem2.jpg',
        url: 'https://app.uxcel.com/certificates/7RJW6SF4IO6D',
      },
      {
        nome: 'Item 1',
        descricao: 'Descrição do Item 1',
        icon: './images/wireframe.png',
        imagemFullScreen: './images/wireframe.png',
        url: 'https://app.uxcel.com/certificates/PUZFK4XYH3WN',
      },
      {
        nome: 'Item 1',
        descricao: 'Descrição do Item 1',
        icon: './images/certux.png',
        imagemFullScreen: './images/wireframe.png',
        url: 'https://www.exemplo.com/item1',
      },
      {
        nome: 'Item 1',
        descricao: 'Descrição do Item 1',
        icon: './images/centradoux.png',
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
