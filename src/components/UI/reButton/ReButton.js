import React from 'react';
import './ReButton.css';

const STYLES = ['short-button', 'long-button'];

export const ReButton = ({ children, type, onClick, buttonStyle }) => {
  const ButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <button className={ButtonStyle} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
