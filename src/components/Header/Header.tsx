// src/components/Header/Header.tsx
import React from 'react';
import styles from './Header.module.scss';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Profile } from '@it-incubator/ui-kit';

type HeaderProps = {
  toggleSidebar: () => void;
};

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className={styles.main}>
      <div className={styles.burger} onClick={toggleSidebar}>
        <BurgerMenu />
      </div>
      <div className={styles.user}>
        <Profile />
        <p>By Vladimir Kasperovich</p>
      </div>
    </header>
  );
};
