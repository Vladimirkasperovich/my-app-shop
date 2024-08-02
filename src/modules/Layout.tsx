// src/modules/Layout.tsx
import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import styles from './Layout.module.scss';
import { Sidebar } from '../components/SideBar/Sidebar.tsx';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className={styles.layout}>
        {isSidebarOpen && (
          <Sidebar onClose={toggleSidebar} />
        )}
        <main className={`${styles['main-content']} ${isSidebarOpen ? styles['sidebar-open'] : styles['sidebar-closed']}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
