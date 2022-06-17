import "../scss/header.scss";
import "../scss/home.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="topnav">
                <div className="logo-link">
                    <a href="/">Mojo</a>
                </div>
            </nav>
        </header>
    )
};

export default Header;