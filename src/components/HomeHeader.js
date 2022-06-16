import "../scss/home.scss"

const HomeHeader = () => {
    const HEADER_LINKS = [
        {
            name: "Projects",
            route: "/#projects",
        },
        {
            name: "Experiences",
            route: "/#experiences",
        }
    ];

    return (
        <header className="home-header">
            <div className="home-header-section">
                <img
                    className="home-profile"
                    alt="profile"
                    src="https://avatars.githubusercontent.com/u/59799831?v=4" />
            </div>
            <div className="home-header-section">
                <ul>
                    {HEADER_LINKS.map((e, i) => <li key={i}><div className="header-link"><a href={e.route}>{e.name}</a></div></li>)}
                </ul>
            </div>
        </header>
    )
}
export default HomeHeader