const Navbar = () => {
    return (<div>navbar</div>)
}
function NavBar() {
    return <nav className="nav">
        <a href="'/" className="page-title">Life List</a>
        <ul>
            <li>
                <a href="/login">Log In</a>
            </li>
            <li>
                <button href="/sign-up">Sign-Up</button>
            </li>
        </ul>
    </nav>
}

export default NavBar;