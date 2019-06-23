import styled from 'styled-components';

export default styled.section`
  width: 290px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 668px;
  }
  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 1050px;
  }
`;
