import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 position-fixed w-100 zindex" id="navbar">
        
                <div className="container navfont">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <link rel="shortcut icon" href="logo.png" type="image/x-icon"/>
                    <Link to="/" className="navbar-brand ms-lg-5"><h3><strong>HBT</strong></h3></Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5">
                        <li className="nav-item me-3 ms-3">
                        <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item me-3 ms-3">
                            <Link to="/about" className="nav-link active">About</Link>
                        </li>
                        <li className="nav-item me-3 ms-3">
                            <Link className="nav-link active" to="/contact">Contact</Link>
                        </li>  
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
