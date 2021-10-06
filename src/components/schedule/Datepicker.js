import React from 'react'

function Datepicker({dateChanger,dateInterval,aySecildi}) {
    const list = [ "Ocak", "Şubat", "MArt", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ]
    let interval =  new Date(`${dateInterval.getMonth() + 1}/ ${dateInterval.getDate()}/${dateInterval.getFullYear()}`)

    let x = new Date(`${dateInterval.getMonth() + 1}/ ${dateInterval.getDate()}/${dateInterval.getFullYear()}`)
    x.setDate(x.getDate() +6)

    return (
        <div className="datePicker">
        <div className="dayinterval">
            <text>{interval.getDate()} {list[interval.getMonth()]} - {x.getDate()} {list[x.getMonth()]}</text>
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
            <li><a class="dropdown-item" href="#" onClick={()=>aySecildi({x})} >{x}</a></li> 
            )):null}
          </ul>

  </div>
    </div>
    )
}

export default Datepicker
