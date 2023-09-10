import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';

const SHIPPING = 3000;

export default function Cart() {
  const { user } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () =>
    getCart(user.uid)
  );

  if (isLoading) <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (accumulator, current) =>
        accumulator + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className='text-center px-2'>
      <h2 className='my-6 text-2xl font-bold'>내 장바구니</h2>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className='grid grid-cols-1 sm:grid-cols-1 ml:grid-cols-2 mxl:grid-cols-3 justify-items-center gap-4'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className='my-9 lg:mx-9 py-20 flex justify-around items-center border border-neutral-300'>
            <PriceCard text='총 제품 금액' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0 text-xl text-sky-600' />
            <PriceCard text='배송비' price={SHIPPING} />
            <FaEquals className='shrink-0 text-xl text-sky-600' />
            <div className='grid gap-y-5'>
              <PriceCard text='결제할 금액' price={totalPrice + SHIPPING} />
              <Button text='주문하기' />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
