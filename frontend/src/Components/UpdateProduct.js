import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function UpdateProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false); // Add logic to manage this state if needed

    const params = useParams(); // Get `id` from the route parameters
    const navigate = useNavigate(); // For programmatic navigation

    useEffect(() => {
        getProductDetails();
    }, []); // Add dependency array to avoid infinite loop

    const getProductDetails = async () => {
        try {
            let result = await fetch(`http://localhost:5000/product/${params.id}`);
            result = await result.json(); // Parse the JSON response
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
                method: 'PUT', // Update with the correct HTTP method
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, category, company }),
            });

            if (result.ok) {
                alert('Product updated successfully!');
                navigate('/'); // Navigate to the homepage after updating
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
        <div className="update-product">
            <h2 className="name mx-3">Update Product</h2>

            <div className="form-group mb-3 col-3 mx-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error && !name && <span className="valid-input">Enter a valid name</span>}
            </div>

            <div className="form-group mb-3 col-3 mx-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {error && !price && <span className="valid-input">Enter a valid price</span>}
            </div>

            <div className="form-group mb-3 col-3 mx-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Product Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                {error && !category && <span className="valid-input">Enter a valid category</span>}
            </div>

            <div className="form-group mb-3 col-3 mx-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                {error && !company && <span className="valid-input">Enter a valid company</span>}
            </div>

            <button
                onClick={updateProduct}
                type="button"
                className="btn btn-success mb-3 mx-3"
            >
                Update Product
            </button>
        </div>
    );
}

export default UpdateProduct;
