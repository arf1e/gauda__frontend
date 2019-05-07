import styled from 'styled-components';
const JumbotronStyled = styled.div`
.lead{
  text-align: justify;
  text-indent: 30px;
  margin-bottom: 3%;
  font-size:20px;
}
.leadThreeColumn{
  margin-bottom: 5%;
  text-align: center;
}
.jumbotron{
  padding:1rem;
}
.btnLearnMore{
  padding: .5rem 1rem;
  line-height: 1.5;
  border-radius: .3rem;
  font-size:20px;
}
.AboutUs{
  color:#6c757d;
  font-weight:400;
  border:.3rem;
  &:hover{
    color:white;
  }
}
`;
export default JumbotronStyled;