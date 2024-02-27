import { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type ButtonName = 'Home' | 'About';

const  Menu = () => {
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
        <Link href={'./Home'}  className={styles.linkstyle}>
          <div
            className={`${styles.btnsmenus} ${isButtonSelected('Home')}`}
            onClick={() => handleButtonClick('Home')}
          >
            Home
          </div>
        </Link>
        <Link href={'./About'}  className={styles.linkstyle}>
          <div
            className={`${styles.btnsmenus} ${isButtonSelected('About')}`}
            onClick={() => handleButtonClick('About')}
          >
            About
          </div>
        </Link>
        <Link href={'./Resume'}  className={styles.linkstyle}>
          <div
            className={`${styles.btnsmenus} ${isButtonSelected('About')}`}
            onClick={() => handleButtonClick('About')}
          >
            Resume
          </div>
        </Link>
        <Link href={'./Tv'} className={styles.linkstyle}>
          <div
            className={`${styles.btnsmenus} ${isButtonSelected('About')}`}
            onClick={() => handleButtonClick('About')}
          >
            TV
          </div>
        </Link>

      </div>
    </div>
  );
}

const Navbar = () => {
  return(
      <div className={styles.navbar}>
        <Link href={'./Home'}  className={styles.linkstyle}>
        <div className={styles.btnnav}> Home </div>
        </Link>
        <Link href={'./About'}  className={styles.linkstyle}>
        <div className={styles.btnnav}> About </div>
        </Link>
        <Link href={'./Resume'}  className={styles.linkstyle}>
        <div className={styles.btnnav}> Resume </div>
        </Link>
         <Link href={"./Tv"}  className={styles.linkstyle}>
        <div className={styles.btnnav}>
            TV 
        </div>
        </Link>
        
      </div>
  );
}

const Guias = () => {
  return(
    <div>
     <Menu/>
     <Navbar/>
    </div>
  );
}

export {Menu, Navbar}

export default Guias;
