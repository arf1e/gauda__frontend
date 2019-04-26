import { Carousel, Button } from 'react-bootstrap';
import StyledCarouselSlider from './styled/StyledCarouselSlider';
const CarouselSlider = () => (
<StyledCarouselSlider>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/static/img/demo1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>First Cheese</h1>

      <Button variant="outline-light" type="button" className="carousel__btn">View</Button>
      <Button variant="outline-primary" type="button" className="carousel__btn">Buy Now</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/static/img/demo1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Second Cheese</h1>
      <Button variant="outline-light" type="button" className="carousel__btn">View</Button>
      <Button variant="outline-primary" type="button" className="carousel__btn">Buy Now</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/static/img/demo1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Third Cheese</h1>
      <Button variant="outline-light" type="button" className="carousel__btn">View</Button>
      <Button variant="outline-primary" type="button" className="carousel__btn">Buy Now</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</StyledCarouselSlider>
);
export default CarouselSlider;