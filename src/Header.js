import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Makes You want to Be</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #ccc',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    color: '#333',
  },
};

export default Header;
