import styled from 'styled-components';
const JumbotronStyled = styled.div`
.container{
  position:relative;
  padding:0!important;
}
.contentAboutBlock{
    background: rgba(255, 255, 255, 0.7);
    position:absolute;
    left:10%;
    top:25%;
    right:5%;
    overflow:hidden;
  }
  .contentAboutBlock__heading{
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    text-transform:uppercase;
    padding:5%;
  }
  .contentAboutBlock__inner{
    border: 2px solid #000000;
    margin:5%;
  }
  .contentAboutBlock__text{
    text-align:justify;
    padding:0 5%;
  }
  .contentAboutBlock__button{
    background: #175842;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color:white;
    padding:10px; 
    margin-left:5%;
    margin-bottom:5%;
  }
@media (min-width: ${({ theme }) => theme.tabletWidth}) {
  
}


@media (min-width: ${({ theme }) => theme.desktopWidth}) {
  .container{
  padding:0 -15px!important;
}
  .contentAboutBlock{
    left:10%;
    top:20%;
    right:50%;
  }
  .contentAboutBlock__heading{
    font-size: 28px;
    line-height: 38px;
    padding:5%;
  } 
  
}
`;
export default JumbotronStyled;