import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
      username: '', //cathy12
      password: '',
      password2: ''
    });
  
    const {Fullname, Email, Username, Password, ConfirmPassword } = user;  
  
    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value})
  
    const onSubmit = (e) => {
      e.preventDefault();

      console.log(user)
  
      fetchData("/user/register", 
        {
            Fullname,
            Email,
            Username,
            Password,
            ConfirmPassword
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
<form onSubmit={onSubmit}>
    <div className="form-group">
        <label className="form-label" hmtlFor="Fullname">Full name</label>
        <input type="text" id="Fullname" name="Fullname" onChange={onChange} className="form-control" placeholder="Enter Name" value ={ Fullname } />
    </div>
    <div className="form-group">
        <label htmlFor="Email1">Email </label>
        <input type="email" className="form-control" id="Email1" name="Email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" value = {Email} />
    </div>
    <div className="form-group">
        <label htmlFor="Username">Username</label>
        <input type="text" className="form-control" id="Username" name="Username" onChange={onChange} placeholder="Enter Username" value = {Username} />
    </div>
    <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input type="password" className="form-control" id="Password" name="Password" onChange={onChange} placeholder="Password" value = {Password} />
    </div>
    <div className="form-group">
        <label className="form-label" htmlFor="ConfirmPassword">Confirm password</label>
        <input type="password" id="ConfirmPassword" name="ConfirmPassword" onChange={onChange} className="form-control" placeholder="Enter Password" value ={ ConfirmPassword} />
    </div>
  
  <button type="submit" className="btn btn-primary">Register</button>
  </form> 
</div>

    );
}

export default Register;