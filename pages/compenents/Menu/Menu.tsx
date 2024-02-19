import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type ButtonName = 'Home' | 'About';

export default function Menu() {
  const [selectedButton, setSelectedButton] = useState<ButtonName | null>(null);

  const handleButtonClick = (buttonName: ButtonName) => {
    setSelectedButton(buttonName);
  };

  const isButtonSelected = (buttonName: ButtonName) => {
    return selectedButton === buttonName ? styles.selectedButton : '';
  };

  return (
    <div className={styles.container}>
      <div className={styles.menudesktop}>
        <Link href={'./'}>
          <div
            className={`${styles.btnsmenus} ${isButtonSelected('Home')}`}
            onClick={() => handleButtonClick('Home')}
          >
            Home
          </div>
        </Link>
        <Link href={'../Front/pagefront'}>
          <div
            className={`${styles.btnsmenus} ${isButtonSelected('About')}`}
            onClick={() => handleButtonClick('About')}
          >
            About
          </div>
        </Link>
      </div>
      <div className={styles.menumobile}>Mobile Menu</div>
      <div className={styles.navbar}>NavBar</div>
    </div>
  );
}
