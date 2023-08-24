import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default function Button({ text, onClick }) {
  return (
    <AwesomeButton
      onPress={onClick}
      style={{
        fontSize: '17px',
        fontWeight: 'bold',
        width: '80px',
        height: '37px',
        buttonPrimaryColor: 'black',
      }}
    >
      {text}
    </AwesomeButton>
  );
}
