import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, ] = useState(false);


    const params = useParams(); // Destructure the `id` from URL params

    useEffect(() => {
        getProductDetails();
    },);

    const getProductDetails = async () => {
        try {
            let result = await fetch(`http://localhost:5000/product/${params.id}`);
            result = await result.json(); // Call `.json()` to parse the response
            console.warn(result);
            setName(result.name);
            setPrice(result.price);
            setCategory(result.category);
            setCompany(result.company);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const updateProduct = async () => {
        console.warn({ name, price, category, company });

        try {
            const result = await fetch(`http://localhost:5000/product/${params.id}`, {
                method: 'PUT', // Or PATCH, based on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, category, company }),
            });

            if (result.ok) {
                alert('Product updated successfully!');
            } else {
                console.error('Failed to update product:', result.statusText);
                alert('Failed to update product.');
            }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('An error occurred while updating the product.');
        }
    };

    return (
<div className="update-product ">
            <h2 className='name mx-3'>Update product</h2>
            <div className="form-group mb-3 col-3 mx-3">
            <input type='text' 
            className='form-control'
            placeholder='Product name'
            value={name}
            onChange={(e) => { setName(e.target.value) }} />
            {error && !name &&<span className='valid-input'>Enter Valid Name</span>}<br/>
            </div>

            <div className="form-group mb-3 col-3 mx-3">
            <input type='text' 
            className='form-control'
            placeholder='price'
            value={price}
            onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price &&<span className='valid-input'>Enter valid Price</span>}<br />

            </div>

            <div className="form-group mb-3 col-3 mx-3">
            <input type='text'
            className='form-control'
            placeholder='Product Category'
            value={category}
            onChange={(e) => { setCategory(e.target.value) }} />
            {error && !category &&<span className='valid-input'>Enter valid Category</span>}<br />

            </div>
 
            <div className="form-group mb-3 col-3 mx-3">
            <input type='text'
            className='form-control'
            placeholder='company'
            value={company}
            onChange={(e) => { setCompany(e.target.value) }} />
            {error && !category &&<span className='valid-input'>Enter valid Category</span>}<br />

            </div>

            <button onClick={updateProduct} type='button' className='btn btn-success mb-3 mx-3'>Update Product</button>

        </div>
    );
}

export default UpdateProduct;
