import  './header.css'

function Header() {
  return (
    <div>
      <header>
        <nav className='container'>
            <h5>V0 Store</h5>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
      </header>
      <h4>Our Products</h4>
    </div>
  )
}

export default Header
