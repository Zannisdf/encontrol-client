import React from 'react';

const Container = ({ styles, open, render: Content }) => {
  return (
    <main className={`${styles.content} ${open ? styles.contentShift : ''}`}>
      <div className={styles.drawerHeader} />
      {Content}
    </main>
  );
};

export default Container;
