import React from 'react';
import styles from '../../../styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';


export default function Banner(){

    const [btnrotulo, setBetnRotulo] = useState ('');
    return(
        <div className={styles.banner}>
          
            <div className={styles.profilecard}>
              <Image
                src="/images/pjperson.png"
                alt="Descrição da imagem"
                width={140} 
                height={140} 
                />
          <div className={styles.datacardprof}>
              <a style={{margin:'10px'}}> Paulo Vieira</a>
              <a style={{fontSize:'12px'}}>vieirajjr@gmail.com</a>
            
                  <div  className={styles.hi}><a>{"Hi, I’m UI Design and Front-end Developer."}</a></div>
             
            <div className={styles.contlinebtn}>
              <div className={styles.contbutton}>
                <Image
                alt="Descrição da imagem"
                src="/whats.png"
                width={32}
                height={32}
                />
                {btnrotulo && 
                    <div style={{marginLeft:'6px'}}>
                    {btnrotulo}
                    </div>
                }
          </div>
          <div className={styles.contbutton}>
                <Image
                  alt="Descrição da imagem"
                src="/iconguit.png"
                width={32}
                height={32}
                />
                  {btnrotulo && 
                    <div style={{marginLeft:'6px'}}>
                  {btnrotulo}
                </div>
                  }
          </div>
          <div className={styles.contbutton}>
                <Image
                  alt="Descrição da imagem"
                src="/iconin.png"
                width={32}
                height={32}
                />
                  {btnrotulo && 
                    <div style={{marginLeft:'6px'}}>
                  {btnrotulo}
                </div>
                  }
          </div>
          
          </div>
          </div>
          
          </div>
          
            
        </div>
    );
    
}