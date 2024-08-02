import React from 'react';
import styles from './Sidebar.module.scss';
import { Close } from '@it-incubator/ui-kit';

interface SidebarProps {
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className={`${styles.sidebar} ${styles.open}`}>
      <Close className={styles.closeButton} onClick={onClose} />
      <div className={styles.menuItem}>Home</div>
      <div className={styles.menuItem}>About</div>
      <div className={styles.menuItem}>Services</div>
      <div className={styles.menuItem}>Contact</div>
    </div>
  );
};
