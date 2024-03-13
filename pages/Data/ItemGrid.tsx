import React from 'react';
import styles from '../../styles/Items.module.css';
import { useState } from 'react';
import Link from 'next/link';

type Item = {
  nome: string;
  descricao: string;
  icon: string;
  imagemFullScreen: string;
  url: string;
};


type ItemGridProps = {
  items: Item[];
};

const ItemGrid: React.FC<ItemGridProps> = ({ items }) => {

    const [handleitem, setHandleitem] = useState ('')


    const handleshows= () => {
       alert('Teste')
      };

  return (
    <div className={styles.gridcontainer} >
      {items && items.map((item, index) => (
      <Link href={item.url} target='Blank'>
        <div key={index} className={styles.griditem}>
          <img src={item.icon} alt={`Ícone ${item.nome}`} className={styles.icone} />
        </div>
       </Link>
      ))}
    </div>
  );
};

export default ItemGrid;

