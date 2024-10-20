import { styled } from 'styled-components';

const Container = styled.div`
  width: 87.2%;
  max-width: 1110px;
  margin: 0 auto;
  padding-top: 71px;
  padding-bottom: 71px;

  @media (min-width: 1270px) {
    padding-top: 160px;
    padding-botton: 160px;
  }
`;

export default Container;
