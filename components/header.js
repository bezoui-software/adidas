function Header() {
  return (
    <header>
      <div id='logo'>Adidas</div>
      <nav>
        <Link to='/' className='link'>Products</Link>
        <Link to='/' className='link'>Contact</Link>
        <Link to='/' className='link'>About</Link>
      </nav>
    </header>
  );
}