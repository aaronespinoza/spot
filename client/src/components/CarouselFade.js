import Carousel from 'react-bootstrap/Carousel';
import SpotDetails from '../components/SpotDetails';


function CarouselFade() {
  return (
    
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.smugmug.com/photos/i-Zrr6jVN/1/X2/i-Zrr6jVN-X2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> {SpotDetails[0].title} </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.smugmug.com/photos/i-gDRZRv6/1/X3/i-gDRZRv6-X3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://photos.smugmug.com/photos/i-kCkd4Fz/1/X3/i-kCkd4Fz-X3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;