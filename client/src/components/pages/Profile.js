import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const [gamename, setgamename] = useState({
      gn:''
    });
    const {gn} = gamename;  

    const onChange = (e) => setgamename({...gamename, [e.target.name]: e.target.value})
  
  
  
    return (
        <form>
        <div>
          <label>
            Create gn:
            <input type="text" name="gn" id="gn" onChange={onChange} placeholder="Enter Gamename" value = {gn} />
          </label>
          <input type="submit" value="Submit" />
          </div>
        </form>
      );
    }


  export default Profile;