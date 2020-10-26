function Header() {
  return (
    <header>
      <div id='logo'>Adidas</div>
      <nav>
        <Link to='/adidas' className='link'>Products</Link>
        <Link to='/adidas' className='link'>Contact</Link>
        <Link to='/adidas' className='link'>About</Link>
      </nav>
    </header>
  );
}
