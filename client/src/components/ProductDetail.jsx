import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const [product, setProduct] = useState('')

    const { id } = useParams()

    const getProduct = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data)
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

  return (
    <div className='container text-center text-capitalize m-3'>
        <h2 className='text-danger'>{product.name}</h2>
            <div className="card m-5 border-0 text-center">
                <div className="card-img-top">
                    <img className='w-50' src={product.image} alt={product.name} />
                </div>
                <div className="card-body m-4">
                   <table className='table table-warning table-responsive table-stripped border'>
                    <tbody>
                        <tr>
                            <td className='text-danger'>Price</td>
                            <td>{product.price}</td>
                        </tr> <tr>
                            <td className='text-danger'>Category</td>
                            <td>{product.category}</td>
                        </tr>
                        <tr>
                            <td className='text-danger'>Description</td>
                            <td>{product.description}</td>
                        </tr>
                    </tbody>
                   </table>
                </div>
            </div>
        
    </div>
  )
}

export default ProductDetail