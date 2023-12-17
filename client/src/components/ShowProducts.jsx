import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const ShowProducts = () => {

    const [products, setProducts] =useState([])

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        console.log(response.data)
    }

    useEffect(() => {
        getProducts()
    }, [])

  return (
    <div>ShowProducts</div>
  )
}

export default ShowProducts