import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/global.module.css';

const Index: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/Home');
  }, [router]);

  return <div className={styles.container}>Redirecionando...</div>;
};

export default Index;
