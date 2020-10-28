function Header() {
  const toggleMobileNavbar = () => document.querySelector('header #mobile-navbar').classList.toggle('hide-mobile-navbar');

  return (
    <header>
      <div id='logo'>Adidas</div>
      <nav id='laptop-navbar'>
        <Link to='/' className='link'>Products</Link>
        <Link to='/' className='link'>Contact</Link>
        <Link to='/' className='link'>About</Link>
      </nav>
      <nav id='mobile-navbar' className='hide-mobile-navbar'>
        <Link to='/' className='link'>Products</Link>
        <Link to='/' className='link'>Contact</Link>
        <Link to='/' className='link'>About</Link>
      </nav>
      <div id='mobile-navbar-toggle' class='material-icons' onClick={toggleMobileNavbar}>menu</div>
    </header>
  );
}
