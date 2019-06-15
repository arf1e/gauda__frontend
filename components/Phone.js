import styled from 'styled-components';
const StyledPhone = styled.div`
opacity:.8;
:hover{
    cursor:pointer;
    opacity:1;
}
.phoneNumber{
    font-weight:600;
    text-decoration:none;
    color:black;
}
`;

const Phone = () => (
<StyledPhone>
<img src="/static/img/phone-black.png" alt="Phoneicon" /><a href="tel:+310616472414" className="phoneNumber">+31(0)6-16472414</a>
</StyledPhone>
);
export default Phone;