import React from 'react';

const Container = ({ styles, open, children }) => {
  return (
    <main className={`${styles.content} ${open ? styles.contentShift : ''}`}>
      <div className={styles.drawerHeader} />
      {children}
    </main>
  );
};

export default Container;
