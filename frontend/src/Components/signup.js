import React, { useState, useEffect } from "react";
import { useNavigate,Link} from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
    {
      navigate('/')
    }
  })

  const collectData = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    console.warn({ name, email, password });

    try {
      let result = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      result = await result.json();
      console.warn(result);
      localStorage.setItem("user", JSON.stringify(result));
      if (result) {
        navigate('/');
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div className='container-fluid form '>
      <form onSubmit={collectData} className="form max-vb-100">
      <h2>Customer registration</h2>
        <div className=" col-4 mt-5">
          <input className="form-control"
            type='text'
            placeholder='Username'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br/>
        </div>
        <div className=" col-4">
          <input className="form-control"
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
        </div>
        <div className=" col-4">
          <input className="form-control"
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
        </div>
        <div className="wel-btn">
        <button type='submit' className='btn btn-success mb-5 mx-3'>Sign Up</button>
        <p>or</p>
        <Link to="/login">
        <button onClick="/login" type='button' className='btn btn-primary mb-3 mx-3'>Login</button>
        </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
