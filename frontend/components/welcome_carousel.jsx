const React = require('react');
const Carousel = require('react-bootstrap').Carousel;
// const Carousel.Item = require('react-bootstrap').Carousel.Item;
// const Carousel.Caption = require('react-bootstrap').Carousel.Caption;

const WelcomeCarousel = React.createClass({
  render() {
    return(
      <Carousel>
        <Carousel.Item>
          <img width={900} height={300} alt="900x300" src="https://res.cloudinary.com/soundscape/image/upload/v1467348974/green_forest_hpxu7g.jpg"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={300} alt="900x300" src="https://res.cloudinary.com/soundscape/image/upload/v1467348986/coffeeshop_gesg1f.jpg"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={300} alt="900x300" src="https://res.cloudinary.com/soundscape/image/upload/v1467349002/beachwaves_qgvy7z.jpg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={300} alt="900x300" src="https://res.cloudinary.com/soundscape/image/upload/v1467348995/greered_forest_k3p645.jpg"/>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={300} alt="900x300" src="https://res.cloudinary.com/soundscape/image/upload/v1467348911/city_ef8ajv.jpg"/>
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
});

module.exports = WelcomeCarousel;
