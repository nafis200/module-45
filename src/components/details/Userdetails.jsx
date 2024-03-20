import { useLoaderData } from "react-router-dom";



const Userdetails = () => {
    const user = useLoaderData()
    const {name} = user;
    return (
        <div>
            <h2>Details about user:{name}</h2>
        </div>
    );
};

export default Userdetails;