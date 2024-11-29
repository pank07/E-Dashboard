import React, { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')
    }
  },)

  const handleLogin = async () => {
    console.warn("email,password", email, password)
    let result = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify({email, password }), 
      headers: {
        'Content-Type':'application/json',
      },
    });
    result = await result.json();
    console.warn(result)
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/")

    } else {
      alert("Please enter valid email and password")
    }
  }
  return (
    <div className='container-fluid form-2 col-12'>
      <form><h2>Welcome Login Page</h2>
        <div className="col-4 mt-5">
          <input className="form-control"
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
        </div>
        <div className="col-4">
          <input className="form-control"
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </div>
        <div className="wel-btn">
        <button onClick={handleLogin} type='button' className='btn btn-primary mb-5 mx-3'>Login</button>
        <p>or</p>
        <Link to='/signup'><button type='submit' className='btn btn-success mx-3'>Sign Up</button>
        </Link>
        </div>
        <p className="forgot"><Link to='/'>forgot password?</Link></p>

 </form>
    </div>
  );
}

export default Login;
