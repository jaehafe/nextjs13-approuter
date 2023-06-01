import React from 'react';
import styles from './page.module.css';

interface IPortfolioLayout {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: IPortfolioLayout) {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
}
