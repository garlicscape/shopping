import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthContext } from '../components/context/AuthContext';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';

const SHIPPING = 3000;

export default function Cart() {
  const { user } = useAuthContext();
  const { isLoading, data: products } = useQuery(['carts'], () =>
    getCart(user.uid)
  );

  const hasProducts = products && products.length > 0;
  const totalPrice = products.reduce(
    (accumulator, current) =>
      accumulator + parseInt(current.price) * current.quantity,
    0
  );

  if (isLoading) <p>Loading...</p>;
  return (
    <>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div>
            <p>총 금액 : {totalPrice}</p>
            <p>배송비 : {SHIPPING}</p>
            <p>결제할 금액 : {totalPrice + SHIPPING}</p>
          </div>
        </>
      )}
    </>
  );
}
