import React from 'react';
import ReactiveButton from 'reactive-button';
import '../ui/Button.css';

export default function Button({ text, onClick }) {
  return (
    <ReactiveButton
      size='small'
      onClick={onClick}
      idleText={text}
      style={{
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '5px',
      }}
    ></ReactiveButton>
  );
}
