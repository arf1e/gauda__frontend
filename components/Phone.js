import styled from 'styled-components';
const StyledPhone = styled.div`
opacity:.8;
:hover{
    cursor:pointer;
    opacity:1;
}
.phoneNumber{
    font-weight:600;
}
`;

const Phone = () => (
<StyledPhone>
<img src="/static/img/phone.png" alt="Phoneicon" /><span className="phoneNumber">+(31 70) 364 64 73</span>
</StyledPhone>
);
export default Phone;