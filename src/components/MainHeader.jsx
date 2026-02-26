import { Link } from "react-router-dom"

const MainHeader = () => {
    return (
        <nav className="custom-navbar mb-4">
            <div className="container-fluid">
                <Link className="custom-brand" to="/">
                    MovieHub
                </Link>
            </div>
        </nav>
    )
}

export default MainHeader