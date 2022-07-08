import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { fetchData } from "../../main.js";

const Profile = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState({posttitle: '', postcontent: ''
  });

  const { posttitle, postcontent } = post;
    const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        const userid = location.state.name;
        fetchData("/post/create",
            {
              posttitle,
              postcontent,
              userid
            },
            "POST")
            .then((data) => {
                if (!data.message) {
                    console.log(data)
                    setPost({
                      posttitle: '',
                        postcontent: ''
                    });
                    fetchData("/post/view",
                        {
                          userid
                        },
                        "POST")
                        .then((res) => {
                            console.log(res);
                            if (!res.message) {
                                navigate("/profile", { state: { name: userid, data: res } });
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const delelePost = async (e,post) => {
      e.preventDefault();
      const userid = location.state.name;
      fetchData("/post/delete",
          {
              id: post._id
          },
          "DELETE")
          .then((data) => {
              if (!data.message) {
                  console.log(data)
                  fetchData("/post/view",
                      {
                        userid
                      },
                      "POST")
                      .then((res) => {
                          console.log(res);
                          if (!res.message) {
                              navigate("/profile", { state: { name: userid, data: res } });
                          }
                      })
                      .catch((error) => {
                          console.log(error)
                      })
              }
          })
          .catch((error) => {
              console.log(error)
         })
    }
  
    return (
      <div className ="container">
        <div className="row justify-content-center">
            <div className="card mb-3 col-md-8 col-xl-6 mt-5">
              <form onSubmit={onSubmit}>
                <div className ="form-group mb-3">
                  <label htmlFor="exampleInputUsername">Post</label>
                  <input type="text" className ="form-control" name="posttitle" placeholder="Enter title" onChange={onChange} value ={ posttitle}/>
                </div>
                <div className ="form-group mb-3">
                  <label htmlFor="exampleInputPassword1">Contents</label>
                  <input type="text" className ="form-control" name="postcontent" placeholder="Enter content"  onChange={onChange} value ={ postcontent}/>
                </div>
                <button type="submit" className ="btn btn-primary mb-3">Create</button>
              </form>
            </div>
        </div>
        {location.state.data.map(post => (
          <div className="row justify-content-center">
            <div className="card mb-3 col-md-8 col-xl-6">
              <div className="card-body">
                <h5 className="card-title">{post.posttitle}</h5>
                <p className="card-text">{post.postcontent}</p>
                <a  onClick={e=> delelePost(e,post)} className="card-link danger">Delete</a>
              </div>
            </div>
          </div>
         ))}
      </div>
      );
    }

  export default Profile;