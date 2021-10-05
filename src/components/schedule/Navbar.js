import React from 'react'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <text>Odalar</text>
        </li>
        <li class="nav-item">
          <text>9 Boş Oda</text>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Aramak İstediğiniz Metni Yazınız" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"></button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
