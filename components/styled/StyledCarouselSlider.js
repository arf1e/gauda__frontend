import styled from 'styled-components';
const StyledCarouselSlider = styled.div`
.carousel-inner img{
  width: ${props => props.theme.mobileWidth};
  height: 100%;
}
.carousel-caption{
  position: absolute;
  top:50%;
  transform: translateY(-70%);
}
@media (min-width:${props => props.theme.tabletWidth}){
  .carousel-inner img{
  width: ${props => props.theme.tabletWidth};
  height: 100%;
}
.carousel-caption h1{
  font-size: 500%;
  text-transform: uppercase;
  text-shadow: 1px 1px 15px #000;
}
.carousel-indicators li{
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.carousel__btn{
  margin:5% 2%;
  font-size: 200%;
}
}
@media (min-width:${props => props.theme.desktopWidth}){
  .carousel-inner img{
  width: ${props => props.theme.desktopWidth};
  height: 100%;
}
}
`;

export default StyledCarouselSlider;