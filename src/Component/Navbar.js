function Navbar() {
    return (
      <nav className="navbar">
        <div className="logos">
          <img className="logo" src="https://flowbite.com/docs/images/logo.svg" />
          <span className="GeekFoods">GeekFoods</span>
        </div>
  
        
        <ul>
          <li>Home</li>
          <li>Quote</li>
          <li>Resturants</li>
          <li>Foods</li>
          <li>Contact</li>
        </ul>
        <div className="btn">
          <button className="getStarted">Get Started</button>
        </div>
      </nav>
    );
  }
  export default Navbar;