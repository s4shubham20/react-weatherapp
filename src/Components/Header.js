import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="d-flex justify-content-end w-100">
                        <Link to="/" className="text-light pe-3">
                            Home
                            <i className="fa-solid fa-house-user px-2"></i>
                        </Link>
                        <Link to="/weather" className="text-light">
                            Weather
                            <i className="fa-solid fa-cloud px-2"></i>
                        </Link>
                   </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;