import { Menu } from '@it-incubator/ui-kit';
import { useState } from 'react';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isOpenBurgerMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  console.log(isOpen);

  return (
    <div className={styles.wrapper}>
      <Menu
        onClick={isOpenBurgerMenuHandler}
        className={`${styles.icon}`}
      />
    </div>
  );
};
