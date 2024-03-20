import { useLoaderData, useNavigate, useParams } from "react-router-dom";



const Userdetails = () => {
    const user = useLoaderData()
    const {name} = user;
    const {userId} = useParams()
    const navigate = useNavigate()

    console.log(userId);

    const handleGoBack = ()=>{
         navigate(-1)
    }

    return (
        <div>
            <h2>Details about user:{name}</h2>
            <button onClick={handleGoBack} className="btn">Go back</button>
        </div>
    );
};

export default Userdetails;
