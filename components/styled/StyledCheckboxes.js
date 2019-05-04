import styled from 'styled-components';
const StyledCheckboxes = styled.div`
.containerOuter__checkBoxContainer{
  position: relative;
  margin: 20px;
  overflow: hidden;
  width: 160px;
}
.entry {
  height: 25px;
  position: absolute;
  width: 160px;
}
.entry:nth-child(2) {
  left: 8px;
  top: 8px;
}
.entry:nth-child(4) {
  left: 8px;
  top: 58px;
}
.entry:nth-child(6) {
  left: 8px;
  top: 108px;
}
.entry-label {
  cursor: pointer;
  margin-top: -3px;
  padding-left: 40px;
  user-select: none;
  -moz-user-select: none;
}
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