import React from 'react'
import {monthsList} from '../Contexts/Odalar'
import {DateProvider} from '../Contexts/DateContext'


function Datepicker() {

  const value = React.useContext(DateProvider)
  console.log("------------------------------------------------",value)
  const dateInterval = value.dateInterval.dateInterval
  const setdateInterval = value.dateInterval.setDateInterval
  const initOdalar = value.odalar.odalar
  const setodalar = value.odalar.setOdalar
  
    let interval =  new Date(`${dateInterval.getMonth() + 1}/ ${dateInterval.getDate()}/${dateInterval.getFullYear()}`)

    let x = new Date(`${dateInterval.getMonth() + 1}/ ${dateInterval.getDate()}/${dateInterval.getFullYear()}`)
    x.setDate(x.getDate() +6)

    var aySecildi = (girdi) =>{
      //buraya ayı seçince hangi aysa o ayın ilk gününü dateIntervale verirsin. Aşagıdakini dinamik yaparsın
      // her seçilen ay için değişince odalar da otomatik değişir.
      setdateInterval(new Date(`${girdi}/1/2021`))
      let newDate = new Date(`${girdi}/1/2021`)
      setodalar(prev =>(
          initOdalar.filter(i =>newDate.getFullYear() === (new Date(i.gün1)).getFullYear() & newDate.getMonth() === (new Date(i.gün1)).getMonth() & (newDate.getDate() <= (new Date(i.gün1)).getDate() & newDate.getDate() < (new Date(i.gün1)).getDate() + 7))
      ))
  }
  var dateUp = () =>{
        let x = dateInterval
        x.setDate(x.getDate() +7)
        setdateInterval(new Date(`${x.getMonth() + 1}/${x.getDate()}/2021`))
        setodalar(prev =>(
            initOdalar.filter(i => (dateInterval.getDate() <= (new Date(i.gün1)).getDate() & dateInterval.getDate() < (new Date(i.gün1)).getDate() + 7))
        ))
    }
  var dateDown = () => {
        let x = dateInterval
        x.setDate(x.getDate() - 7)
        setdateInterval(new Date(`${x.getMonth() + 1}/${x.getDate()}/2021`))
        setodalar(prev =>(
            initOdalar.filter(i => (x.getDate() <= (new Date(i.gün1)).getDate() & x.getDate() < (new Date(i.gün1)).getDate() + 7))
        ))
    }
    





    return (
        <div className="datePicker">
        <div className="dayinterval">
            <text>{interval.getDate()} {monthsList[interval.getMonth()]} - {x.getDate()} {monthsList[x.getMonth()]}</text>
        </div>
        <div className="weekintervalpicker">
            <button onClick={() => dateDown}>{"<"}</button>
            <button onClick={() => dateUp}>{">"}</button>
        </div>
  <div className="dropdown">

          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {monthsList ?(monthsList.map((x,index)=>
            <li><a class="dropdown-item" href="/" onClick={() => aySecildi(index+1)} >{x}</a></li> 
            )):null}
          </ul>

  </div>
    </div>
    )
}

export default Datepicker
