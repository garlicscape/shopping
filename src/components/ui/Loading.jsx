import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Loading() {
  return (
    <p className='text-center'>
      로딩 중
      <FontAwesomeIcon icon={faSpinner} spin className='ml-2 mt-16' />
    </p>
  );
}
