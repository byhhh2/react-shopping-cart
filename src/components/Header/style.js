import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  background-color: var(--primary-color);
  position: fixed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export default StyledHeader;