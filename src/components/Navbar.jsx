function Navbar() {
  return (
    <nav className="navbar">
      <h2>LeetCode Clone</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Problems</li>
        <li>Contest</li>
        <li>Learning</li>
        <li>About</li>
      </ul>

      <div className="nav-actions">
        <button>Sign In</button>
        <button>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;