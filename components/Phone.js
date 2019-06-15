import styled from 'styled-components';
const StyledPhone = styled.div`
    margin-top:${props => props.theme.mobileMarginTopHeaderElement};
    opacity:.8;
    &:hover{
    cursor:pointer;
    opacity:1;
    }
    .phoneNumber{
    font-weight:400;
    font-size:12px;
    text-decoration:none;
    color:black;
    }
  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    margin-top:0%;
    .phoneNumber{
        font-weight:500;
        }
  }
  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    .phoneNumber{
    font-weight:500;
    font-size:16px;
  }
  }
`;

const Phone = () => (
<StyledPhone>
<img src="/static/img/phone-black.png" alt="Phoneicon" /><a href="tel:+310616472414" className="phoneNumber">+31(0)6-16472414</a>
</StyledPhone>
);
export default Phone;