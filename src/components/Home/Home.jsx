import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/view1.png';
import img2 from './images/map.png';
import img3 from './images/view2.png';

function Home() {
  return (
    <div className='conteiner'>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="view1"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="map"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="view2"
          />
          <Carousel.Caption>
            <h5 style={{ color:'#DCDCDC' }}>Third slide label</h5>
            <p style={{ color:'#DCDCDC' }}>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home