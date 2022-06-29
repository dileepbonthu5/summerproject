const Register = () => {
    return (
<div>
           <h2>Register</h2>
        <form>
    <div class="form-group">
        <label class="form-label" for="fullName">full name</label>
        <input type="text" id="registerName" class="form-control" placeholder="Enter Name"  />
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Email </label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  />
    </div>
    <div class="form-group">
        <label for="exampleInputUsername">Username</label>
        <input type="text" class="form-control" id="exampleInputusername" placeholder="Enter Username"  />
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  />
    </div>
    <div class="form-group">
        <label class="form-label" for="registerConfirmPassword">Confirm password</label>
        <input type="password" id="registerRepeatPassword" class="form-control" placeholder="Enter Password" />
    </div>
  
  <button type="submit" class="btn btn-primary">Register</button>
  </form> 
</div>

    );
}

export default Register;