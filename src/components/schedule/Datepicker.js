import React from 'react'

function Datepicker() {
    const list = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]
    return (
        <div className="datePicker">
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
  <div class="dropdown d-flex">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {list ? (list.map(x =>
        <li><button class="dropdown-item" href="#">{x}</button></li>
        )):null}
  </ul>
</div>
</div>
</div>
</nav>
    </div>
    )
}

export default Datepicker
