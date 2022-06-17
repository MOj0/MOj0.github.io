import "../scss/header.scss";
import "../scss/home.scss";

const Header = () => {
    return (
        <header className="header">
            <nav className="topnav">
                <div className="logo-link">
                    <a href="/"><img
                        className="home-icon"
                        alt="profile"
                        src="https://avatars.githubusercontent.com/u/59799831?v=4" />
                    </a>
                </div>
            </nav>
        </header>
    )
};

export default Header;