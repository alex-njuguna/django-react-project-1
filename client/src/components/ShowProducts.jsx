import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const ShowProducts = () => {

    const [products, setProducts] =useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div className='container'>
        <div className='row'>
            {products.map((product) => (
                <div className='col-md-2'>
                <div className="card m-2 pb-2 text-center rounded shadow-lg">
                    <div className="card-img-top" >
                        <img className='w-100 p-1' src={product.image}  alt={product.name} />
                    </div>
                    <div className="card-body p-2">
                        <h5 style={{textDecoration: 'underline'}}>{product.name}</h5>
                        <p>{(product.category) ? product.category : 'N/A'}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                    </div>
                    <div className="card-foter">
                        <button className='btn btn-primary'>View</button>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default ShowProducts