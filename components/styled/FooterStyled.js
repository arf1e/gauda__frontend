import styled from 'styled-components';
const FooterStyled = styled.div`
.container-fluid{
  color: white;
  background-color: #3f3f3f;
}
.contactBlock{
  margin:10% 0;
  text-align:left;
}
.footerIcon, .footerIcon__text{
  color:white;
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
  border: 3px solid #ffffff;
  padding:5%;
}
.mediaBlock{
  padding:15px;
  margin:5% 5%;
  border: 3px solid #ffffff;
}
.mediaBlocks{
  margin:5% 5%;
  display:flex;
  justify-content: center;
}
.messageInput{
  position:relative;
  border:2px solid #ffffff;
  display:flex;
  align-items: center;
}
#messageInput__input{
  margin-left:5%;
  padding-left:5%;
  border:none;
  width:75%;
}
.messageInput__button{
  margin-left:5%;
  color: white;
  background-color: #3f3f3f;
  border:none;
  opacity:.8;
  &:hover{
    cursor: pointer;
    opacity:1;
  }
}
.footerphone{
  text-decoration:none;
  color:white;
}
.goudaLinks{
  padding:15px;
}
.goudaLink{
  margin-top:2%;
}
.goudaLink__a{
  color:white;
  cursor: pointer;
  opacity:.9;
  transition:.4s ease-in;
  &:hover{
    opacity:1;
  }
}
h2{
  margin-top:20px;
}
`;
export default FooterStyled;