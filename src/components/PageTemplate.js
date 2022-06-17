import Header from "./Header";
import Footer from "./Footer";

const PageTemplate = () => {
    return (
        <div className="base">
            <Header />
            <slot></slot>
            <Footer />
        </div>
    )
}

export default PageTemplate;