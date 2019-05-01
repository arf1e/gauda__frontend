import styled from 'styled-components';
const StyledRadioButtons = styled.div`
.containerRadio {
  position: relative;
  margin: 20px;
  overflow: hidden;
  width: 160px;
}

.containerOuter__checkBoxContainer{
  position: relative;
  margin: 20px;
  overflow: hidden;
  width: 160px;
}
.hidden {
  display: none;
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
.circle {
  border: 2px solid #545556;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  position: absolute;
  transition: border-color 300ms;
  width: 20px;
}
.entry-label {
  cursor: pointer;
  margin-top: -3px;
  padding-left: 40px;
  user-select: none;
  -moz-user-select: none;
}
.overlay {
  background: #fff;
  height: 140px;
  pointer-events: none;
  transition: background 300ms;
  width: 40px;
}
.highlight {
  background: var(--main-violet);
  border-radius: 50%;
  height: 12px;
  left: 14px;
  pointer-events: none;
  position: absolute;
  top: 14px;
  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.2);
  transform: translateY(-50px);
  width: 12px;
}
.hidden:nth-child(1):checked ~ .highlight {
  transform: translateY(0);
}
.hidden:nth-child(3):checked ~ .highlight {
  transform: translateY(50px);
}
.hidden:nth-child(5):checked ~ .highlight {
  transform: translateY(100px);
}
.hidden:nth-child(1):checked + .entry .circle {
  border-color: var(--main-violet);
}
.hidden:nth-child(3):checked + .entry .circle {
  border-color: var(--main-violet);
}
.hidden:nth-child(5):checked + .entry .circle {
  border-color: var(--main-violet);
}
@media (max-width: 768px){
  .containerRadio{
    margin: 5px;
  }
  .containerOuter__checkBoxContainer{
    margin: 5px;
  }
  .entry-label{
    padding-left: 35px;
  }
}
.entry-label-bolder{
  font-weight: 400;
}
#goodCheese, #goodWine, #goodButter{
  font-weight: 400;
}
`;
export default StyledRadioButtons;