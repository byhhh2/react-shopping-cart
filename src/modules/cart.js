const INCREASE_QUANTITY = 'counter/INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'counter/DECREASE_QUANTITY';
const DELETE_ITEM = 'cart/DELETE_ITEM';
const TOGGLE_CHECKBOX = 'cart/TOGGLE_CHECKBOX';
const ALL_UNCHECK = 'cart/ALL_UNCHECK';
const ALL_CHECK = 'cart/ALL_CHECK';

export const increaseQuantity = (cartItemId) => ({ type: INCREASE_QUANTITY, payload: cartItemId });
export const decreaseQuantity = (cartItemId) => ({ type: DECREASE_QUANTITY, payload: cartItemId });
export const deleteItem = (cartItemId) => ({ type: DELETE_ITEM, payload: cartItemId });
export const toggleCheckbox = (cartItemId) => ({ type: TOGGLE_CHECKBOX, payload: cartItemId });
export const allCheck = () => ({ type: ALL_CHECK });
export const allUnCheck = () => ({ type: ALL_UNCHECK });

const initialState = [
  {
    id: '1',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11153-main-01.png',
    name: '[\ub4e0\ub4e0] \uc720\ubd80 \uc2ac\ub77c\uc774\uc2a4 500g',
    price: '4900',
    quantity: 1,
    checked: true,
  },
  {
    id: '2',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11157-main-01.png',
    name: '[\ub4e0\ub4e0] \uc9c4\ub9db\uc0b4 1kg',
    price: '7100',
    quantity: 1,
    checked: true,
  },
  {
    id: '3',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11161-main-01.png',
    name: '[\ub4e0\ub4e0] \uc2e0-\ud0a4\ub9ac\ubaa8\ucc0c 1kg',
    price: '12000',
    quantity: 1,
    checked: true,
  },
  {
    id: '4',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11263-main-01.png',
    name: '[\ub4e0\ub4e0] \ud751\uace4\uc57d 250g',
    price: '1300',
    quantity: 1,
    checked: true,
  },
  {
    id: '5',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11153-main-01.png',
    name: '[\ub4e0\ub4e0] \uc720\ubd80 \uc2ac\ub77c\uc774\uc2a4 500g',
    price: '4900',
    quantity: 1,
    checked: true,
  },
  {
    id: '6',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11157-main-01.png',
    name: '[\ub4e0\ub4e0] \uc9c4\ub9db\uc0b4 1kg',
    price: '7100',
    quantity: 1,
    checked: true,
  },
  {
    id: '7',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11161-main-01.png',
    name: '[\ub4e0\ub4e0] \uc2e0-\ud0a4\ub9ac\ubaa8\ucc0c 1kg',
    price: '12000',
    quantity: 1,
    checked: true,
  },
  {
    id: '8',
    image: 'https://cdn-mart.baemin.com/goods/custom/20200525/11263-main-01.png',
    name: '[\ub4e0\ub4e0] \ud751\uace4\uc57d 250g',
    price: '1300',
    quantity: 1,
    checked: true,
  },
];

const changeCount = (state, id, mode) => {
  const targetIndex = state.findIndex((value) => value.id === id);
  if (targetIndex === -1) {
    return state;
  }
  const cartItem = state[targetIndex];

  if (mode === 'decrease') {
    if (cartItem.quantity <= 1) {
      //TODO : custom Alert 할수있으면 해보자
      alert('수량은 1개 이상이어야 합니다.');
      return state;
    }
  }

  return [
    ...state.slice(0, targetIndex),
    { ...cartItem, quantity: `${mode === 'increase' ? Number(cartItem.quantity) + 1 : cartItem.quantity - 1}` },
    ...state.slice(targetIndex + 1),
  ];
};

const toggleCheck = (state, id) => {
  const targetIndex = state.findIndex((value) => value.id === id);
  if (targetIndex === -1) {
    return state;
  }
  const targetItem = state[targetIndex];

  return [
    ...state.slice(0, targetIndex),
    { ...targetItem, checked: !targetItem.checked },
    ...state.slice(targetIndex + 1),
  ];
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return changeCount(state, action.payload, 'increase');
    case DECREASE_QUANTITY:
      return changeCount(state, action.payload, 'decrease');
    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case TOGGLE_CHECKBOX:
      return toggleCheck(state, action.payload);
    case ALL_CHECK:
      return state.map((item) => ({ ...item, checked: true }));
    case ALL_UNCHECK:
      return state.map((item) => ({ ...item, checked: false }));
    default:
      return state;
  }
};

export default cartReducer;
