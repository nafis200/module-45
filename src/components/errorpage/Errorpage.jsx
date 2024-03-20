import { Link, useRouteError } from "react-router-dom";



const Errorpage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
           <h2>Oops!!!</h2> 
           <p>{error.statusText || error.message}</p>
           {
             error.status === 404 && <div>
               <h3>Page not found</h3>
               <p>Go back where you form</p>
               <Link to="/"> <button className="btn">Home</button> </Link>
             </div>
           }
        </div>
    );
};

export default Errorpage;