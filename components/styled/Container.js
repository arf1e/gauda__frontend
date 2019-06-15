import styled from 'styled-components';

export default styled.section`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    width: 100%;
  }
`;
