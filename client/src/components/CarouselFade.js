import Carousel from 'react-bootstrap/Carousel';
import SpotDetails from '../components/SpotDetails';
import SpotInfo from './SpotInfo';
import "./CarouselFade.css"


function CarouselFade() {
  return (
    <>
    <Carousel className="shaker"fade>
      <Carousel.Item>
        <img
          className=" d-block w-100 "
          src="https://cdn.pixabay.com/photo/2017/06/23/17/46/desert-2435404_1280.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://cdn.pixabay.com/photo/2012/11/06/15/40/tree-64310_1280.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://cdn.pixabay.com/photo/2018/12/24/02/23/animal-3892117_1280.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <SpotInfo className="mover"></SpotInfo>
    </>
  );
}

export default CarouselFade;