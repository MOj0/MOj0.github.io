import "../scss/social.scss";

const SocialLinks = () => {
    const GITHUB_LINK = "https://github.com/MOj0";
    const LINKEDIN_LINK = "https://www.linkedin.com/in/matija-ojo-0a598a220/";

    return (
        <div className="social_links">
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
        </div>)
}

export default SocialLinks;