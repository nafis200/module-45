import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav className="space-x-5">
                <Link to="/">home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;