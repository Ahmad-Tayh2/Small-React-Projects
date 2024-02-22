import airbnblogo from "../images/airbnb-logo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={airbnblogo} className="nav--logo" alt="logo"/>
        </nav>
    )
}