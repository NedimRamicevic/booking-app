import React from 'react'

function Datepicker({dateChanger,dateInterval}) {
    const list = [ "Ocak", "Şubat", "MArt", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ]
    console.log(dateInterval)
    return (
        <div className="datePicker">
        <div className="dayinterval">
            <text>{dateInterval.getDate()} - {dateInterval.getDate() + 6} {list[dateInterval.getMonth()]}</text>
        </div>
        <div className="weekintervalpicker">
            <button onClick={x => dateChanger("<")}>{"<"}</button>
            <button onClick={x => dateChanger(">")}>{">"}</button>
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
