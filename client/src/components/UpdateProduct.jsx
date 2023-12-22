import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router'

const UpdateProduct = () => {

	const [image, setImage] = useState(null)
  	const [name, setName] = useState('')
  	const [price, setPrice] = useState('')
  	const [category, setCategory] = useState('')
  	const [description, setDescription] = useState('')

  	const { id } = useParams()
  	const navigate = useNavigate()

  	const loadProduct = async () => {
  		const { data } = await axios.get(`http://localhost:8000/api/${id}/`)
  		console.log(data)

  		setName(data.name)
  		setPrice(data.price)
  		setCategory(data.category)
  		setDescription(data.description)
  		setImage(data.image)

  	}

  	useEffect(() => {
  		loadProduct()
  	}, [])


  	const UpdateProductInfo = async () => {
  		let formField = new FormData()

  		formField.append('name', name)
  		formField.append('price', price)
  		formField.append('category', category)
  		formField.append('description', description)
  		if (image !== null) {
  			formField.append('image', image)
  		}

  		await axios({
  			method: 'PUT',
  			url: `http://localhost:8000/api/${id}/`,
  			data: formField
  		}).then((response) => {
  			console.log(response.data)
  			navigate(`/${id}/`)
  		})

  	}

	return (
    <div className='container-sm mt-5'>
      <h2 className='text-center mb-4'>Update Product</h2>
  
      <div className="card p-4">
  
         <div className="mb-3">
          <img src={image} alt="Product Preview" className="img-fluid" width="300px" />
        </div> 
  
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Product Image</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])} 
            required
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Product Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Product Name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="form-control" 
            required
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Pricing</label>
          <input 
            type="text" 
            id="price" 
            placeholder="Pricing" 
            name="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            className="form-control" 
            required
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <input 
            type="text" 
            id="category" 
            placeholder="Category" 
            name="category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="form-control" 
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea 
            id="description" 
            placeholder="Description" 
            name="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="form-control" 
            required
          />
        </div>
  
        <div className="text-center">
          <button className="btn btn-success" onClick={UpdateProductInfo}>Update</button>
        </div>
  
      </div>
    </div>
  );  
}


export default UpdateProduct