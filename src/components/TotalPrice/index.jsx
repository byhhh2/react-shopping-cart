import { Button } from 'components';
import theme from 'components/theme';
import UnderlineText from 'components/UnderlineText';
import autoComma from 'utils/autoComma';
import Styled from './index.style';

const TotalPrice = ({ title, price, action }) => {
  return (
    <Styled.TotalPrice>
      <Styled.TitleContainer>{title}</Styled.TitleContainer>
      <Styled.DetailContainer>
        <Styled.PriceContainer>
          <UnderlineText>{title}</UnderlineText>
          <UnderlineText>{autoComma(price)}원</UnderlineText>
        </Styled.PriceContainer>
        <Styled.ButtonContainer>
          <Button bg={theme.colors.mint} width="100%" height="73px">
            <Styled.Action>{action}</Styled.Action>
          </Button>
        </Styled.ButtonContainer>
      </Styled.DetailContainer>
    </Styled.TotalPrice>
  );
};

export default TotalPrice;
