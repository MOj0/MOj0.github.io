import Header from "./Header";

const NotFound = () => {
    return (
        <div className="base">
            <Header/>
            <h1 style={{ color: "#ff037", textTransform: "uppercase", fontSize: "4em", fontWeight: "100" }}>
                Not Found
            </h1>
            <p>This route doesn't exist.</p>
        </div >
    )
}

export default NotFound;