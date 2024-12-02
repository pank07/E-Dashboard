import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function Addproduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);
    const addProduct = async () => {
        // console.warn(name, price, category, company);
        if (!name || !price || !category || !company) {
            setError(true);
            return (false)
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
  
    }
    // const navigate = useNavigate();
    // const addProduct = () => {
    //     console.log("Adding product..."); // Optional logging
    //     navigate("/"); // Navigate to the home page
    // };



    return (
        <div>
            <h2 className='name mx-3'>Add product</h2>
            <div className="form-group mb-3 col-3 mx-3">
                <input type='text'
                    className='form-control'
                    placeholder='Product name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                {error && !name && <span className='valid-input'>Enter valid name</span>}<br />
            </div>

            <div className="form-group mb-3 col-3 mx-3">
                <input type='text'
                    className='form-control'
                    placeholder='price'
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }} />
                {error && !price && <span className='valid-input'>Enter valid Price</span>}<br />
            </div>

            <div className="form-group mb-3 col-3 mx-3">
                <input type='text'
                    className='form-control'
                    placeholder='Product Category'
                    value={category}
                    onChange={(e) => { setCategory(e.target.value) }} />
                {error && !category && <span className='valid-input'>Enter valid Category</span>}<br />
            </div>

            <div className="form-group mb-3 col-3 mx-3">
                <input type='text'
                    className='form-control'
                    placeholder='company'
                    value={company}
                    onChange={(e) => { setCompany(e.target.value) }} />
                {error && !company && <span className='valid-input'>Enter valid company</span>}<br />
            </div>
            <Link to="/">
            <button onClick={addProduct} type='button' className='btn btn-primary mb-3 mx-3'>Add Product</button>
            </Link>

        </div>
    )
}

export default Addproduct
