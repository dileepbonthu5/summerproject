const About = () => {
    return(
        <div>
            <h1 className="text-center dispaly-1">About App</h1>
          <div className="container">
          <hr />
          <h2 className="text-center"> RULES...</h2>
          <hr />
          <div className="row text-primary">
          <div className="col-md">
           Sport is good for health
          </div>
          <div className="col-md">
          Sport is good for health
           </div>
           <button className = "mt-5 btn-danger">PLAY MORE</button>
         </div>

         <hr />
         <h2 className="text-center"> MORE RULES...</h2>
         <hr />
         <div className="row">
            <div className="col-md bg-warning p-5">
            Sport is good for health
           </div>
           <div className="col-md">
           Sport is good for health
           </div>
            </div>

         </div>
        </div>
    
    );
}

export default About;