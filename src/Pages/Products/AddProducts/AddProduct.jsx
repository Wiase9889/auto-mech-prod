import React, { useEffect, useState } from 'react'
import classes from './AddProduct.module.css'
import Sidebar from '../../../Components/Sidebar/Sidebar'
import db from '../../../DB/db'

const AddProduct = () => {
  // state values..
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [supplier, setSupplier] = useState('')
  const [contact, setContact] = useState('')

  useEffect(() => {
    let autoGenId = () => {
      db.collection('products').get().then(products => {
        setId(products.length + 1)
      })
    }

    return () => {
      autoGenId();
    }
  })

  // Function to add the user inputed values to the Database...
  const addProduct = (event) => {
    event.preventDefault();

    let productData = { id, name, price, category, supplier, contact }

    if (!id || !name || !price || !supplier || !contact || !category) {
      alert('Please add a product')
      return;
    } else {
      alert('Succesfully added product')
      db.collection('products').add(productData)

      setId(id)
      setName('')
      setCategory('')
      setPrice('')
      setContact('')
      setSupplier('')
    };
  }

  return (
    <>
      <Sidebar />
      <div className={classes.add_products}>
        <div className={classes.product_hd}>
          <h2>Add New Product</h2>
        </div>

        {/* Add New Product Form */}
        <form className={classes.product_form} autoCorrect='true' onSubmit={addProduct}>
          <div className={classes.form_group}>
            <label htmlFor="product_id">Product Id</label>
            <input
              type="number"
              id='product_id'
              name='product id'
              placeholder={`00${id}`}
              className={classes.product_id}
              required
              disabled
              value={`00${id}`}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="product_name">Product Name</label>
            <input
              type="text"
              id='product_name'
              name='product name'
              placeholder='Product name'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="product_price">Product Price</label>
            <input
              type="number"
              id='product_price'
              name='product price'
              placeholder='Product price'
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.category}>
            <label htmlFor="category">Product Category</label>
            <select
              name="category"
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="" defaultValue disabled>Choose Category</option>
              <option value="Engines">Engines</option>
              <option value="Wind Screens">Wind Screens</option>
              <option value="Tyres">Tyres</option>
              <option value="Bonnets">Bonnets</option>
              <option value="Glass">Glass</option>
              <option value="fluids">Fluids</option>
            </select>
          </div>
          <div className={classes.form_group}>
            <label htmlFor="suppliers_name">Supplier Name</label>
            <input
              type="text"
              id='suppliers_name'
              name='suppliers name'
              placeholder="Supplier's name"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              required
            />
          </div>
          <div className={classes.form_group}>
            <label htmlFor="suppliers_contact">Supplier Contact</label>
            <input
              type="tel"
              id='suppliers_contact'
              name='suppliers contact'
              placeholder="+ (233) 123456789"
              // minLength={10}
              // maxLength={13}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required />
          </div>

          {/* Submit */}
          <div className={classes.add_product}>
            <button
              type="submit"
              className={classes.addProductBtn}
              onClick={addProduct}
            >Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddProduct