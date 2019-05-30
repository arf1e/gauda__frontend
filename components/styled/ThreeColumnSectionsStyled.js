import styled from 'styled-components';

const ContainerStyled = styled.div`
.display-4 {
    margin: 3rem 0 3rem 10%;
    font-weight: bold;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-align:left;
  }
  .theeCheese{
    max-width:inherit;
    border-radius:50%;
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
  .CheeseBlock{
    margin:auto;
  }
  .cost{
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    color: #175842;
  }
@media (min-width: ${({ theme }) => theme.tabletWidth}) {
  .display-4 {
    font-size: 36px;
    line-height: 49px;
  } 
}
@media (min-width: ${({ theme }) => theme.desktopWidth}) {
  .display-4 {
    margin: 3rem 0 3rem 10%;
    font-size: 48px;
    line-height: 65px;
  }
}
  
`;
export default ContainerStyled;
