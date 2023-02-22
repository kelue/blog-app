import React from 'react'
import { Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const BlogItem = ({blog:{title, description, cover}}) => {
  return (
    <Col className='mt-5 rounded-4'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cover} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
        </Card>
    </Col>
    )
}

export default BlogItem
