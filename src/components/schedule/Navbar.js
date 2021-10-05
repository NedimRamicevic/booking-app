import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <text>Odalar</text>
        </li>
        <li className="nav-item">
          <text>9 Boş Oda</text>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Aramak İstediğiniz Metni Yazınız" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"></button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
