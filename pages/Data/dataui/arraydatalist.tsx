// pages/index.js

import React from 'react';
import ItemData from './Itemdata';
import styles from '../styles/ItemGrid.module.css';
import Image from 'next/image';

const Uis = () => {
  const itens = [
    { 
      
      nome: 'GreenThink',
      descricao: 'Nesse projeto, trago um equilibrio interessante entre um produto exclusivo, sustentavel e acessecivel',
      icon: '../../images/imgUis/busine.png',
      skills: 'Auto Layout, Espacos Vazios, Cards, Hierarquia de cores e texto,',
      embedCode: '<iframe width="100%" height="800px"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDTNZMU21TjsG73EpTJMNKi%2FVgents-Solu%25C3%25A7oes%3Fpage-id%3D1%253A5%26type%3Ddesign%26node-id%3D4-60%26viewport%3D-66%252C176%252C0.15%26t%3D09hiPHlM1AaZuGf1-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D4%253A60%26mode%3Ddesign" allowfullscreen></iframe>',
      rating: '7.6',
    },
    { 
  
      nome: 'Item 2',
      descricao: 'Descrição do Item 2',
      icon: '../../images/imgUis/streaming.png',
      skills: '/imagem2.jpg',
      embedCode:'123456',
      rating: '7.6',
    },
    {   
      
        nome: 'Item 3',
        descricao: 'Descrição do Item 1',
        icon: '../../images/imgUis/music.png',
        skills: '/imagem1.jpg',
        embedCode:'123456',
        rating: '7.6',
      },
      {
       
        nome: 'Item 4',
        descricao: 'Descrição do Item 2',
        icon: '../../images/imgUis/travel.png',
        skills: '/imagem2.jpg',
        embedCode:'123456',
        rating: '7.6',
      },
      { 
      
        nome: 'Item 5',
        descricao: 'Descrição do Item 1',
        icon: '../../images/imgUis/dahsboard.png',
        skills: './images/wireframe.png',
        embedCode:'<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="800px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9ZNf1evZy2dP0eeSaTkCat%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D6-4%26mode%3Ddesign%26t%3DxPv4SWCRNLKco7Nq-1" allowfullscreen></iframe>',
        rating: '7.6',
    },
      { 
       
        nome: 'Item 6',
        descricao: 'Descrição do Item 1',
        icon: '../../images/imgUis/basquete.png',
        skills: './images/wireframe.png',
        embedCode:'123456',
        rating: '7.6',
    },
     
  ];

  return (
    <div style={{display:'flex',width:'100%', alignItems:'center', justifyContent:'center'}}>
      <ItemData items={itens} />
    </div>
  );
};

export default Uis;
