import "../scss/home.scss"

const HomeHeader = () => {
    const GITHUB_LINK = "https://github.com/MOj0";
    const LINKEDIN_LINK = "https://www.linkedin.com/in/matija-ojo-0a598a220/";

    return (
        <header className="home-header">
            <div className="home-header-section">
                <a
                    className="social-icon" target="_blank" rel="noopener noreferrer"
                    href={GITHUB_LINK}><img
                        className="home-profile"
                        alt="profile"
                        src="https://avatars.githubusercontent.com/u/59799831?v=4" />
                </a>
            </div>
            <div className="home-header-section">
                <div className="social_links_vertical">
                    <ul>
                        <li>
                            <a
                                className="social-icon" target="_blank" rel="noopener noreferrer"
                                href={GITHUB_LINK}><i className="fab fa-github fa-lg" />
                            </a>
                        </li>
                        <li>
                            <a
                                className="social-icon" target="_blank" rel="noopener noreferrer"
                                href={LINKEDIN_LINK}><i className="fab fa-linkedin fa-lg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default HomeHeader