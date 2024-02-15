import React from 'react';
import styles from '../../styles/Items.module.css';
import { useState } from 'react';

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
    <div className={styles.gridcontainer} onClick={handleshows} >
      {items.map((item, index) => (
        <div key={index} className={styles.griditem}>
          <img src={item.icon} alt={`Ícone ${item.nome}`} className={styles.icone} />
        </div>
      ))}
    </div>
  );
};

export default ItemGrid;

