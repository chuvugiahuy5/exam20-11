function Header() {
  return (
    <header>
      <span className="brand">FPT APTECH</span>
      <nav>
        <a href="#about">About us</a>
        <a href="#products">Products</a>
        <a href="#booking">Booking</a>
        <a href="#locations">Locations</a>
        <button type="button">Sign in</button>
        <button type="button">Sign up</button>
      </nav>
    </header>
  );
}

export default Header;