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
                <div className="card m-2 pb-2 text-center rounded shadow-lg text-capitalize">
                    <div className="card-img-top" >
                        <img className='w-100 p-1' src={product.image}  alt={product.name} />
                    </div>
                    <div className="card-body p-2">
                        <span className='fs-5 '>{product.name}</span>
                        <span className='text-success fs-6'><em> ({(product.category) ? product.category : 'N/A'})</em></span> &nbsp;
                        <br />
                        <span className='text-danger'>@ {product.price}</span> &nbsp;
                        <span className='text-info'> - {product.description}</span>
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