import React, { useState } from 'react';

export default function NewProduct() {
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
    }
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='text-center'>
      <h2 className=''>제품 등록하기</h2>
      <section className='flex justify-around'>
        {file && <img src={URL.createObjectURL(file)} alt='product file' />}
        <form action='' onSubmit={hadleSubmit} className='flex flex-col'>
          <input
            type='file'
            name='file'
            accept='image/*'
            onChange={handleChange}
          />
          <input
            type='text'
            name='title'
            placeholder='제품 이름'
            onChange={handleChange}
          />
          <input
            type='number'
            name='price'
            placeholder='가격'
            onChange={handleChange}
          />
          <input
            type='text'
            name='description'
            placeholder='제품 설명'
            onChange={handleChange}
          />
          <input
            type='text'
            name='size'
            placeholder='사이즈'
            onChange={handleChange}
          />
          <button>등록</button>
        </form>
      </section>
    </section>
  );
}
