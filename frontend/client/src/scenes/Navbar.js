function NavBar() {
  return (
      <nav>
        <div className="navicon">
          <div></div>
        </div>
        <a className="navTag" href="/">Home</a>
        <a className="navTag" href="/todos">Todos</a>
        <a className="navTag" href="/register">Sign Up</a>
      </nav>
  );
}

export default NavBar;
