import styled from 'styled-components';

const ContainerStyled = styled.div`
  .display-4 {
    margin-bottom: 3rem;
  }
  .padding {
    padding-bottom: 2rem;
  }
  .welcome {
    width: 75%;
    margin: 0 auto;
    padding-top: 2rem;
  }
  .welcome hr {
    border-top: 2px solid #b4b4b4;
    width: 95%;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 10% !important;
    color: red;
  }
  @media (max-width: 576px) {
    .container-fluid-Cheese img {
      margin-top: 15%;
    }
  }
`;
export default ContainerStyled;
