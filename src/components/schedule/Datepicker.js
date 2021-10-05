import React from 'react'

function Datepicker() {
    const list = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ]
    return (
        <div className="datePicker">
        <div className="dayinterval">
            <text>Eylül 1 - 7, 2021</text>
        </div>
        <div className="weekintervalpicker">
            <button>{"<"}</button>
            <button>{">"}</button>
        </div>
  <div className="dropdown">

          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {list ?(list.map(x=>
            <li><a class="dropdown-item" href="#">{x}</a></li> 
            )):null}
          </ul>

  </div>
    </div>
    )
}

export default Datepicker
