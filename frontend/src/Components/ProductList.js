import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            let result = await fetch('http://localhost:5000/products');
            result = await result.json();
            if (Array.isArray(result)) {
                setProducts(result);
            } else {
                console.error('Unexpected response format:', result);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            alert("product deleted")
        }
    }

    return (
        
        <div className="product-list">
            <div className='d-flex float-end'>
            <Link to={"/addproduct/"} className='add-product btn mt-1 mx-5 '>Add Product</Link>
            </div>
            <h2 id="name">Product List</h2>
            
            <ul>
                <li><b>S.no</b></li>
                <li><b>Name</b></li>
                <li><b>Price</b></li>
                <li><b>Category</b></li>
                <li><b>Company</b></li>
                <li id='operation-column'><b>Operation</b></li>
            </ul>
            {products.length > 0 ? (
                products.map((item, index) => (
                    <ul key={item._id || index}>
                        <li>{index + 1}</li>
                        <li>{item.name || 'undefined'}</li>
                        <li>{item.price || 'undefined'}</li>
                        <li>{item.category || 'undefined'}</li>
                        <li>{item.company || 'undefined'}</li>
                        <li id='operation-column' >
                            <button onClick={() => deleteProduct(item._id)} className="btn btn-danger btn-sm mx-3">
                                Delete
                            </button>
                            <Link to={"/update/" + item._id} className='btn btn-success btn-sm'>Update</Link>

                        </li>
                    </ul>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default ProductList;
