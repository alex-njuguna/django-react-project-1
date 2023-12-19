import React from 'react'
import { useState } from 'react'

const AddProduct = () => {

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')


  return (
  <div className='container-sm w-75'>
  <h2 className='text-center'>Add Product</h2>

  <div className="form-control">

    <div className="mb-3">
      <img src={image} alt="Product Preview" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>

    <div className="row">
      <div className="col-md-4">
        <label htmlFor="image" className="form-label">Product Image: </label>
      </div>
      <div className="col-md-8">
        <input 
          type="file" 
          id="image" 
          name="image" 
          accept="image/*" 
          onChange={(e) => setImage(e.target.files[0])} 
        />
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="image" className="form-label">Product Image</label>
      <input 
        type="file" 
        id="image" 
        name="image" 
        accept="image/*" 
        onChange={(e) => setImage(e.target.files[0])} 
      />
    </div>

    <div className="mb-3">
      <label htmlFor="name" className="form-label">Product Name</label>
      <input 
        type="text" 
        id="name" 
        required 
        placeholder="Product Name" 
        name="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
    </div>

    <div className="mb-3">
      <label htmlFor="price" className="form-label">Pricing</label>
      <input 
        type="text" 
        id="price" 
        required 
        placeholder="Pricing" 
        name="price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
    </div>

    <div className="mb-3">
      <label htmlFor="category" className="form-label">Category</label>
      <input 
        type="text" 
        id="category" 
        required 
        placeholder="Category" 
        name="category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
    </div>

    <div className="mb-3">
      <label htmlFor="description" className="form-label">Description</label>
      <textarea 
        id="description" 
        required 
        placeholder="Description" 
        name="description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
    </div>

    <div className="form-control m-3 text-center">
      <button className="btn btn-success">Add</button>
    </div>

  </div>
</div>

  )
}

export default AddProduct