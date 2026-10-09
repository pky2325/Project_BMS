import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <header className="head">
            <div className="navtop">

                <Link to="/" className="navbarlogo">
                    Book<span>My</span>Show
                </Link>

                <div className="navbarsearch">
                    <span>⌕</span>
                    <input
                        type="text"
                        placeholder="Search for Movies, events, Plays....."
                    />
                </div>
                <div className="navbaraction">
                    <button className="locationbtn">
                        📍Darbhanga ▾

                    </button>

                    <Link to="/login" className="loginbtn">
                        Sign in
                    </Link>

                </div>


            </div>


            <nav>
                <div>


                    <Link to="/">Home</Link> |
                    <Link to="/movies">Movies</Link> |
                    <Link to="/events">Events</Link> |
                    <Link to="/login" >Login</Link>


                </div>
            </nav>
        </header>
    );
}

export default Navbar;
