import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Description.css';
import img from './images/IMAGE.png';

function Description() {
  return (
    <div className='conteiner'>
      <Card style={{ width: '300px', margin: '0 auto' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Why New York is still our favorite city to visit
            </Card.Text>
            <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Description