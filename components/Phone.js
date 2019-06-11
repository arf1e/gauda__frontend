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
<img src="/static/img/phone.png" alt="Phoneicon" /><a href="tel:+31703646473" className="phoneNumber">+(31 70) 364 64 73</a>
</StyledPhone>
);
export default Phone;