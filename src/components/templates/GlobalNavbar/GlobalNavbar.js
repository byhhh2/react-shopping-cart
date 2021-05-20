import { Link } from 'react-router-dom';
import { NavBar, ShoppingCartIcon } from '../..';
import { ROUTE } from '../../../constants';
import { LogoContainer } from './GlobalNavBar.styles';

const GlobalNavbar = () => {
  const Logo = (
    <LogoContainer to={ROUTE.HOME}>
      <ShoppingCartIcon scale="0.8" color="white" />
      <span>WOOWA SHOP</span>
    </LogoContainer>
  );

  const Links = (
    <>
      <Link to={ROUTE.SHOPPING_CART}>장바구니</Link>
      <Link to={ROUTE.ORDER_LIST}>주문목록</Link>
    </>
  );

  return <NavBar Logo={Logo} Links={Links} />;
};

export default GlobalNavbar;