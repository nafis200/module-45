import { useLoaderData } from "react-router-dom";
import Use from "../use/Use";

const User = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>fantastic and vodro users</p>
            
            <div className="grid grid-cols-3 gap-2 mt-2">
                {
                    users.map(user => <Use key={user.id} user={user}></Use> )
                }
            </div>

        </div>
    );
};


export default User;


