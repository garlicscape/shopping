import React from 'react';
import { useParams } from 'react-router-dom';

export default function Search() {
  const { searchText } = useParams();
  return <div>search {searchText}</div>;
}
