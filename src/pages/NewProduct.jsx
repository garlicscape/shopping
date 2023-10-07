import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { uploadImg } from '../api/upload';
import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import useProducts from '../hook/useProducts';

const INPUT_CLASS = 'h-10 px-2 outline-none focus:bg-gray-100 text-lg';

export default function NewProduct() {
  const [file, setFile] = useState();
  const [product, setProduct] = useState({});
  const [btnState, setBtnState] = useState('idle');
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
    }
    setProduct(() => ({
      ...product,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnState('loading');
    uploadImg(file) //
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setBtnState('success');
              setTimeout(() => {
                setBtnState('idle');
              }, 4000);
            },
          }
        );
      });
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
          onSubmit={handleSubmit}
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
            value={product.title ?? ''}
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='text'
            name='category'
            placeholder='카테고리 (,로 구분)'
            value={product.category ?? ''}
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='number'
            name='price'
            placeholder='가격'
            value={product.price ?? ''}
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='text'
            name='description'
            placeholder='제품 설명'
            value={product.description ?? ''}
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='text'
            name='color'
            placeholder='색깔 (,로 구분)'
            value={product.color ?? ''}
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <input
            type='text'
            name='size'
            placeholder='사이즈 (,로 구분)'
            value={product.size ?? ''}
            onChange={handleChange}
            className={INPUT_CLASS}
            required
          />
          <ReactiveButton
            type='submit'
            buttonState={btnState}
            idleText='등록'
            loadingText={
              <>
                <FontAwesomeIcon icon={faSpinner} spin /> 제품 등록 중
              </>
            }
            successText={
              <>
                <FontAwesomeIcon icon={faCheck} /> 등록이 완료되었습니다.
              </>
            }
            color='blue'
            size='large'
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '5px',
            }}
          ></ReactiveButton>
        </form>
      </section>
    </section>
  );
}
