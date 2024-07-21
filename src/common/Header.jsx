import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <div className=" max-w-screen-xl mx-auto bg-gray-300 p-5">
            <h1>Header</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
};

export default Header;