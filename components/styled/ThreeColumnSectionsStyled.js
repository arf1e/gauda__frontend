import styled from 'styled-components';

const ContainerStyled = styled.div`
  .display-4 {
    margin-bottom: 3rem;
    font-size: 56px;
    font-weight: 300;
    line-height: 1.2;
  }
  .padding {
    padding-bottom: 2rem;
  }
  .welcome {
    width: 100%;
  }
  .welcome hr {
    border-top: 2px solid #b4b4b4;
    width: 95%;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 10%;
    font-size: 28px;
  }
  .leadThreeColumn {
    font-size: 20px;
    margin-bottom: 5%;
    text-align: center;
  }
  @media (max-width: 576px) {
    .container-fluid-Cheese img {
      margin-top: 15%;
    }
  }
  .btnLearnMore {
    padding: 0.5rem 1rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    font-size: 20px;
  }
`;
export default ContainerStyled;
