import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import '../css/Details.css'


export const Detail = () => {
  const { id } = useParams()
  console.log(id)

  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.error('Urun alinirken hata olustu:', error)
      }
    }

    fetchData()
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (

    <div>
      <Header />
      <Card
        className="cards my-2 mt-5 "
        style={{
          height: '35rem',
          width: '25rem'
        }}
      >
        <CardHeader>
          {product?.title.slice(0, 50)} {product?.title.length > 50 ? '...' : ''}
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            <img style={{ width: "150px", height: "150px" }} src={product?.image} alt="" />
          </CardTitle>
          <CardText>
            {product?.description.slice(0, 400)} {product?.description.length > 400 ? '...' : ''}
          </CardText>
        </CardBody>
        <CardFooter>
          <div>Category:  {product?.category} </div>
        </CardFooter>
      </Card>
    </div>
  )
}