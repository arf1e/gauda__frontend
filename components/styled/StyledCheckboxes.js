import styled from 'styled-components';
const StyledCheckboxes = styled.div`

input.inputCheckGoods[type="checkbox"]{
  display: none;
}
label.labelCheckGoods{
  left: 8px;
  top: 8px;
  &::before{
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  opacity: 0.5;
  transition: 0.3s;
  position: absolute;
  cursor: pointer;
}
}
input.inputCheckGoods[type="checkbox"]:checked + label.labelCheckGoods::before{
  border: none;
  opacity:1;
  max-width: 256px;
  max-height: 256px;
  background-image: url("/static/img/check.png");
  background-size: 100%;
}
`;
export default StyledCheckboxes;