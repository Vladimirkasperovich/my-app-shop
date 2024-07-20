// Header.tsx
import { useState } from 'react';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Profile } from '@it-incubator/ui-kit';
import { Sidebar } from '../SideBar/Sidebar';


export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className={styles.main}>
        <div className={styles.burger} onClick={toggleSidebar}><BurgerMenu /></div>
        <div className={styles.user}>
          <Profile />
          <p> By Vladimir Kasperovich</p>
        </div>
      </header>
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </>
  );
};
