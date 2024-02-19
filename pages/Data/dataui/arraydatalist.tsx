// pages/index.js

import React from 'react';
import ItemData from './Itemdata';
import styles from '../styles/ItemGrid.module.css';
import Image from 'next/image';

const Uis = () => {
  const itens = [
    { 
      
      nome: 'GreenThink',
      descricao: '',
      icon: '../../images/imgUis/busine.png',
      skills: 'Auto Layout, Empty Spaces, Cards, Color and Text Hierarchy, Navigation, Components, and Variables.',
      embedCode: '<iframe width="100%" height="800px"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDTNZMU21TjsG73EpTJMNKi%2FVgents-Solu%25C3%25A7oes%3Fpage-id%3D1%253A5%26type%3Ddesign%26node-id%3D4-60%26viewport%3D-66%252C176%252C0.15%26t%3D09hiPHlM1AaZuGf1-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D4%253A60%26mode%3Ddesign" allowfullscreen></iframe>',
      rating:  7.6,
    },
    { 
  
      nome: 'Streeming Geek',
      descricao: '',
      icon: '../../images/imgUis/streaming.png',
      skills: ' Information Design, Visual Hierarchy, Color Palette and Color Theory, Usability Testing,Visual Storytelling',
      embedCode:'<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="800px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fv1ey3IIMcpssM4tqAQwFe0%2FUntitled%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D49-115%26viewport%3D1150%252C854%252C0.71%26t%3DRgDL3ziYKId5k6sy-1%26scaling%3Dmin-zoom%26mode%3Ddesign" allowfullscreen></iframe>',
      rating: 7.6,
    },
    {   
      
        nome: 'Item 3',
        descricao: 'Descrição do Item 1',
        icon: '../../images/imgUis/music.png',
        skills: '/imagem1.jpg',
        embedCode:'123456',
        rating: 7.6,
      },
      {
       
        nome: 'Travel Ease',
        descricao: 'Descrição do Item 2',
        icon: '../../images/imgUis/travel.png',
        skills: '/imagem2.jpg',
        embedCode:'<iframe  style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="800px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FXT4BGk4CaQSol8livrR0Yg%2FTurism%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D2-5%26viewport%3D31%252C699%252C1%26t%3Doiy6zSVj2bU4gNiI-1%26scaling%3Dmin-zoom%26mode%3Ddesign" allowfullscreen></iframe>',
        rating: 7.6,
      },
      { 
      
        nome: 'Item 5',
        descricao: 'Descrição do Item 1',
        icon: '../../images/imgUis/dahsboard.png',
        skills: './images/wireframe.png',
        embedCode:'<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="800px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9ZNf1evZy2dP0eeSaTkCat%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D6-4%26mode%3Ddesign%26t%3DxPv4SWCRNLKco7Nq-1" allowfullscreen></iframe>',
        rating: 7.6,
    },
      { 
       
        nome: 'Item 6',
        descricao: 'Descrição do Item 1',
        icon: '../../images/imgUis/basquete.png',
        skills: './images/wireframe.png',
        embedCode:'123456',
        rating: 7.6,
    },
     
  ];

  return (
    <div style={{display:'flex',width:'100%', alignItems:'center', justifyContent:'center'}}>
      <ItemData items={itens} />
    </div>
  );
};

export default Uis;
