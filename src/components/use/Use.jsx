import { Link, useNavigate } from "react-router-dom";


const Use = ({user}) => {
    const {id,name,email,phone} = user;
    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius:'20px'
    }

    const navigate = useNavigate();

    const handleShow = ()=>{
          navigate(`/user/${id}`)
    }

    return (
       <div style={userStyle}>
        <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <br />
            <button onClick={handleShow} className="btn">Click to see details</button>
       </div>
    );
};

export default Use;

