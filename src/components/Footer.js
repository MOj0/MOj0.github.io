import "../scss/footer.scss";
import SocialLinks from "./SocialLinks"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex_group">
                <SocialLinks />
            </div>
        </footer>
    )
}

export default Footer;