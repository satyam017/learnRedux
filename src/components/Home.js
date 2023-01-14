import React from 'react'
import { Col, Container, Row ,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../service/Constant'

function Home() {
    const dispatch = useDispatch()
    const handleAddToCart = ()=>{
        dispatch({type: ADD_TO_CART, payload: {name: "Shoes",price: "$50"}})
    }
  return (
    <div style={{minHeight:'100vh'}}>
      <Container>
        <Row className='align-items-center justify-content-start'>
            <Col lg={6}>
                <img src="../assets/image-product-1.jpg" className='w-100 img-responsive' alt='Product'/>
            </Col>
            <Col lg={6}>
                <div className='product-detail text-start'>
                    <h1>Shoes</h1>
                    <h2>Price : $50</h2>
                    <div className='desc'>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <Button variant="outline-dark" onClick={handleAddToCart}>Add To Cart</Button>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
