import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR } from '../../constants/color';
import { Button, ProductImage, BUTTON_TYPE, PRODUCT_IMAGE_TYPE, CartInsertingItemDialog } from '..';
import useShoppingCart from '../../hooks/useShoppingCart';

const Container = styled.div`
  display: flex;
  padding: 0 24px;
`;

const TextWrapper = styled.div`
  margin-left: 33px;
`;

const Name = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Info = styled.div`
  color: ${COLOR.GRAY_600};
`;

const OrderItem = ({ id, src, alt, name, quantity, price }) => {
  const { insertShoppingCartItem, isDialogOpen, onConfirm, onCancel, dialogType } = useShoppingCart();

  return (
    <>
      <Container>
        <ProductImage type={PRODUCT_IMAGE_TYPE.SMALL} src={src} alt={alt} />
        <TextWrapper>
          <Name>{name}</Name>
          <Info>
            {price.toLocaleString('ko-KR')}원 / 수량: {quantity}개
          </Info>
        </TextWrapper>
        <div style={{ marginLeft: 'auto' }}>
          <Button onClick={() => insertShoppingCartItem(id)} type={BUTTON_TYPE.SMALL}>
            장바구니
          </Button>
        </div>
      </Container>

      {isDialogOpen && <CartInsertingItemDialog onConfirm={onConfirm} onCancel={onCancel} type={dialogType} />}
    </>
  );
};

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderItem;