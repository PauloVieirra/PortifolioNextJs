import React, { useState } from 'react';
import styles from './style.module.css';
import Menu from '../../compenents/Menu';

type Item = {
  nome: string;
  descricao: string;
  icon: string;
  skills: string;
  embedCode: string;
  rating: string;
};

type ItemDataProps = {
  items: Item[];
};

const ItemData: React.FC<ItemDataProps> = ({ items }) => {

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const openModal = (item: Item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className={styles.container}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.icon} alt={`Ícone ${item.nome}`} className={styles.icone} />
            <div className={styles.intersecond}>
                <div className={styles.cardtitle}>{item.nome}</div>
                <div className={styles.carddescription}>{item.descricao}</div>
                <div className={styles.cardskills}>{item.skills}</div>
                <div className={styles.car}>Nielsen Ratings{item.rating}</div>
                <div className={styles.buttoncontiner}>
                <button className={styles.btnmodalrun} onClick={() => openModal(item)}>Play prototipo</button>
                </div>
               </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className={styles.modal}>
            <div><Menu/></div>
          <div dangerouslySetInnerHTML={{ __html: selectedItem.embedCode }} />
          <button style={{width:'50px', height:'30px',position:'absolute', inset:'0,80'}} onClick={closeModal}>Fechar Modal</button>
        </div>
      )}
    </>
  );
};

export default ItemData;
