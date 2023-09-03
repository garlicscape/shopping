import React from 'react';

export default function SelectedOptionList({ options }) {
  const { color, size } = options;
  return (
    <li>
      {color}
      {size}
    </li>
  );
}
