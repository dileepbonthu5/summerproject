import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => { 

    const navigate = useNavigate();

    const [user, setUser] = useState({
      username: '', //cathy12
      password: '',
      password2: ''
    });
  
    const {Email, Username, Password } = user;  
  
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})
  
    const onSubmit = (e) => {
      e.preventDefault();

      console.log(user)
  
      fetchData("/user/Login", 
        {
        
            Email,
            Username,
            Password,
            
        }, 
        "POST")
      .then((data) => {
        if(!data.message) {
          console.log(data)
          navigate("/sports")
        }
      })  
      .catch((error) => {
        console.log(error)
      })

    }
    return (
    <div>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
  <div className ="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className ="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} value ={ Email}/>
  </div>
  <div className ="form-group">
    <label htmlFor="exampleInputUsername">Username</label>
    <input type="text" className ="form-control" id="Username" placeholder="Enter Username" onChange={onChange} value ={ Username}/>
  </div>
  <div className ="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className ="form-control" id="Password" placeholder="Password"  onChange={onChange} value ={ Password}/>
  </div>
  <div className ="form-check">
    <input type="checkbox" className ="form-check-input" id="exampleCheck1" onChange={onChange}/>
    <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="go" className ="btn btn-primary">go</button>
</form>
    </div>
    );
}

export default Login;