import React from 'react'
import{Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/> 
    <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="bg-gradient-to-r from-black"
      src="https://images.unsplash.com/photo-1514415679929-1fd5193f14f7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
      alt="First slide"
    />
    
    <Carousel.Caption>
    
      <h3>Book Your Doctor Now!!</h3>
      <Link to='/BookDoc'>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white bg-gradient-to-r from-black'>Book Ur Doc</button>
      </Link>
      
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Book Your Doctor Now!!</h3>
     
     
      <Link to='/BookDoc'>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white bg-gradient-to-r from-black'>Book Ur Doc</button>
      </Link>
      
     
    </Carousel.Caption>  
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Book Your Doctor Now!!</h3>
      <Link to='/BookDoc'>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white bg-gradient-to-r from-black'>Book Ur Doc</button>
      </Link>
      
     
    </Carousel.Caption>  </Carousel.Item>

  
</Carousel>

    </>
  )
}

export default Home;