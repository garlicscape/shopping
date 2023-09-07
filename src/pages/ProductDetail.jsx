import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactiveButton from 'reactive-button';
import { AiFillTag } from 'react-icons/ai';
import SelectedOptionList from '../components/SelectedOptionList';
import { v4 as uuid } from 'uuid';
import { AiOutlineStop } from 'react-icons/ai';
import { addProductToCart } from '../api/firebase';
import { useAuthContext } from '../components/context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ProductDetail() {
  const {
    state: {
      product: { id, title, image, price, size, description, color },
    },
  } = useLocation();
  const [options, setOptions] = useState({
    color: '',
    size: '',
  });
  const [btnState, setBtnState] = useState('idle');
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');
  const [selectedList, setSelectedList] = useState([]);
  const [optionSelected, setOptionSelected] = useState(false);
  const { user } = useAuthContext();

  const handleSelect = (e) => {
    const { id, value } = e.target;
    if (value.includes('-')) {
      setOptions({ ...options, [id]: '' });
    } else {
      switch (id) {
        case 'color':
          setOptions({ ...options, [id]: value, size: '' });
          break;
        case 'size':
          setOptions({ ...options, [id]: value });
          break;
        default:
          break;
      }
    }
    setOptionSelected(true);
  };

  const handleDelete = (deleted) => {
    setSelectedList((list) => list.filter((option) => option !== deleted));
    setTotal((prev) => prev - price * deleted.quantity);
  };

  const handlePlus = (plused) => {
    setSelectedList((list) =>
      list.map((item) =>
        item === plused ? { ...item, quantity: item.quantity++ } : item
      )
    );
    setTotal((prev) => prev + price);
  };

  const handleMinus = (plused) => {
    setSelectedList((list) =>
      list.map((item) =>
        item === plused ? { ...item, quantity: item.quantity-- } : item
      )
    );
    setTotal((prev) => prev - price);
  };

  const handleClick = () => {
    if (selectedList.length === 0) {
      setMessage('선택사항이 없습니다!');
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      return;
    } else {
      setBtnState('loading');
      const product = { id, title, image, price, size, color, selectedList };
      addProductToCart(user.uid, product).then(() => {
        setBtnState('success');
        setTimeout(() => {
          setBtnState('idle');
        }, 3000);
      });
    }
  };

  const addOptionToList = () => {
    const filter = selectedList.filter(
      (item) =>
        item.options.color === options.color &&
        item.options.size === options.size
    );
    if (filter.length === 0) {
      setSelectedList((list) => [...list, { options, quantity: 1 }]);
      setTotal((prev) => prev + price);
    } else {
      setMessage('이미 선택된 옵션입니다!');
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
    setOptionSelected(false);
  };

  return (
    <section className='mt-10 flex'>
      <div className='basis-7/12 '>
        <img src={image} alt={title} className='h-2/3 m-auto' />
      </div>
      <div className='basis-5/12 flex flex-col pr-8 mt-5 '>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='flex items-center border-b-2 text-sm py-4 text-gray-600'>
          <AiFillTag className='mr-1' /> {description}
        </p>
        <p className='font-bold text-2xl border-b-2 py-7'>₩{price}</p>
        <div className='flex items-center my-2 mt-9 px-1'>
          <label htmlFor='color' className='text-lg'>
            COLOR
          </label>
          <select
            id='color'
            onChange={handleSelect}
            className='w-full h-10 ml-10 pl-1 outline outline-1 rounded-sm'
            value={options.color}
            required
          >
            <option>-[필수] COLOR 선택-</option>
            {color &&
              color.map((color, index) => <option key={index}>{color}</option>)}
          </select>
        </div>
        <div className='flex items-center my-2 mb-8 px-1'>
          <label htmlFor='size' className='text-lg mr-1.5'>
            SIZE
          </label>
          <select
            id='size'
            onChange={handleSelect}
            value={options.size}
            className='w-full h-10 ml-14 pl-1 outline outline-1 rounded-sm'
            required
          >
            <option>-[필수] SIZE 선택-</option>
            {size &&
              options.color &&
              size.map((size, index) => <option key={index}>{size}</option>)}
          </select>
        </div>
        {!!options.color &&
          !!options.size &&
          optionSelected &&
          addOptionToList()}

        <ul>
          {selectedList.map((item) => (
            <SelectedOptionList
              key={uuid()}
              list={item}
              title={title}
              price={price}
              onPlus={handlePlus}
              onMinus={handleMinus}
              onDelete={handleDelete}
            />
          ))}
        </ul>

        <div className='my-8 flex justify-end items-baseline'>
          <p className='mr-3'>총 상품금액</p>
          <p className='text-2xl font-bold'>{`₩${total}`}</p>
        </div>

        <ReactiveButton
          idleText='장바구니에 추가'
          color='blue'
          buttonState={btnState}
          loadingText={
            <>
              <FontAwesomeIcon icon={faSpinner} spin /> 장바구니에 넣는 중
            </>
          }
          successText={
            <>
              <FontAwesomeIcon icon={faCheck} /> 장바구니에 넣었습니다.
            </>
          }
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '2px',
            padding: '9px 0',
          }}
          onClick={handleClick}
        />

        {message && (
          <p className='mt-5 bg-slate-100 py-6 flex items-center justify-center animate-appear-alert'>
            <AiOutlineStop className='text-amber-500 mr-1 text-xl transform ' />
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
