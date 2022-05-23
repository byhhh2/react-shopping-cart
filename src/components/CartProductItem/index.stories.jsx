import CartProductItem from '.';

export default {
  title: 'Components/CartProductItem',
  component: CartProductItem,
};

const Template = args => <CartProductItem {...args} />;

export const CartProductItemTemplate = Template.bind({});
CartProductItemTemplate.args = {
  id: 1,
  quantity: 10,
};
