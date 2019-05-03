import styled from 'styled-components';
import $ from "jquery";
const ButtonStyled = styled.div`
.btn_up{
  position: fixed;
  bottom: -50px;
  right: 1%;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  background: ${props => props.theme.mainYellowColor};
  z-index: 100;
  outline: 0!important;
  cursor: pointer;
  transition: .4s;
  &:after{
    content: "";
    width: 10px;
    height: 10px;
    border-top: 2px solid ${props => props.theme.mainColor};
    border-left: 2px solid ${props => props.theme.mainColor};
    transform: rotate(45deg);
    position: absolute;
    top: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  &.active{
    .btn_up.active{
    bottom:50px;  
  }
}

}
`;
const ButtonUp = () => (
    <ButtonStyled>
        $("body").append('<button class="btn_up"/>');
        $(".btn_up").click(function(){
            $("body").animate({"scrollTop": 0}, 300);
            $("html").animate({"scrollTop": 0}, 300);
        });
        $(window).scroll(function(){
             if($(window).scrollTop() > 300){
                 $(".btn_up").addClass("active");
             }else{
                 $(".btn_up").removeClass("active");
        }
        });
    </ButtonStyled>
);
export default ButtonUp;
