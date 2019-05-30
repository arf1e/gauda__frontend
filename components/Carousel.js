import StyledBigCheese from './styled/StyledBigCheese';

const CarouselSlider = () => (
  <StyledBigCheese>
    <div className="container">
      <img src="/static/img/cheese.png" alt="Cheese" className="container__image"/>
      <div className="contentBlock">
        <div className="contentBlock__inner">
          <h2 className="contentBlock__heading">Say cheese, say gauda!</h2>
          <p className="contentBlock__text">Fusce nunc eros, gravida et ultrices sit amet, maximus in mauris. 
          Vestibulum mauris orci, malesuada eget tortor non, viverra bibendum velit. Pellentesque ipsum dolor, 
          dapibus sit amet convallis sit amet, lobortis ac neque</p>
          <button className="contentBlock__button">GET YOUR TOUR TICKET</button>
        </div>
      </div>
    </div>
      
  </StyledBigCheese>
);
export default CarouselSlider;
