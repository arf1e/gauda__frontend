import styled from 'styled-components';
const FooterStyled = styled.div`
.contactBlock{
  margin:10% 0;
}
.footerIcon, .footerIcon__text{
  display:inline;
}
.footerIcon{
  margin-right:5%;
}
footer{
  color:black;
  padding-top: 2rem;
}
.socialLink{
  display:block;
}
hr.light{
  border-top: 1px solid #d5d5d5;
  width: 75%;
  margin-top: .8rem;
  margin-bottom: 1rem;
}
footer a{
  color:#d5d5d5;
}
hr.light-100{
  border-top: 1px solid #d5d5d5;
  width: 100%;
  margin-top: .8rem;
  margin-bottom: 1rem
}
h5{
  font-size:20px;
}
.hoursBlock{
  border: 3px solid #000000;
  padding:5%;
}
.mediaBlock{
  padding:15px;
  margin:5% 5%;
  border: 3px solid #000000;
}
.mediaBlocks{
  margin:5% 5%;
  display:flex;
  justify-content: center;
}
.messageInput{
  position:relative;
  border:1px solid #000000;
  display:flex;
  align-items: center;
}
#messageInput__input{
  margin-left:5%;
  padding-left:5%;
  border:none;
  width:75%;
}
#messageInput__button{
  background-image:url("/static/img/mail.png");
  width:21px;
  height:17px;
  border:none;
  position: absolute;
  left: 85%;
}
.footerphone{
  text-decoration:none;
  color:black;
}
`;
export default FooterStyled;