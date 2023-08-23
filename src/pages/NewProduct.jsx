import React, { useState } from 'react';

const INPUT_CLASS = 'h-10 px-2 outline-none focus:bg-gray-100 text-lg';

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
    <section className='text-center px-2'>
      <h2 className='my-6 text-2xl font-bold'>제품 등록하기</h2>
      <section className='flex justify-center'>
        <div className='basis-7/12'>
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt='product file'
              className='w-11/12'
            />
          )}
        </div>
        <form
          action=''
          onSubmit={hadleSubmit}
          className='flex flex-col basis-5/12 gap-2'
        >
          <input
            type='file'
            name='file'
            accept='image/*'
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='title'
            placeholder='제품 이름'
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='number'
            name='price'
            placeholder='가격'
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='text'
            name='description'
            placeholder='제품 설명'
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='text'
            name='size'
            placeholder='사이즈 (,로 구분)'
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <button className='bg-sky-600 text-white py-2 rounded font-bold hover:bg-sky-700 ease-in duration-200'>
            등록
          </button>
        </form>
      </section>
    </section>
  );
}
