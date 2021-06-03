import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR } from '../../constants/color';
import { ShoppingCartItem } from '..';

const Header = styled.div`
  padding-bottom: 24px;
  border-bottom: 4px solid ${COLOR.GRAY_200};
  font-size: 20px;
`;

const ShoppingCartItemWrapper = styled.li`
  border-bottom: 2px solid ${COLOR.GRAY_200};
  padding: 24px 0 12px 0;
`;

const ShoppingCartItemList = ({ shoppingCartItemList }) => (
  <>
    <Header>든든배송 상품 ({shoppingCartItemList.length}개)</Header>
    <ul>
      {shoppingCartItemList.map(({ imageUrl, cartId, name, price, quantity, isChecked }) => (
        <ShoppingCartItemWrapper key={cartId}>
          <ShoppingCartItem
            id={cartId}
            src={imageUrl}
            alt={name}
            name={name}
            price={price}
            quantity={quantity}
            isChecked={isChecked}
          />
        </ShoppingCartItemWrapper>
      ))}
    </ul>
  </>
);

ShoppingCartItemList.propTypes = {
  shoppingCartItemList: PropTypes.arrayOf(
    PropTypes.shape({
      cartId: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      isChecked: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default ShoppingCartItemList;