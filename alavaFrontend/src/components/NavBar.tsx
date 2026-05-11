export {NavBar};

import './Navbar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/offers">Offers</a></li>
            </ul>
        </nav>
    )
}
