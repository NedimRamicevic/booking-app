import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import Odalar from './Odalar'

function Schedule() {
    const [dateInterval, setdateInterval] = useState(new Date("9/01/2021"))
    const [odalar, setodalar] = useState([
        {
            odaId : 1,
            kullanıcı1 : "Nedim",
            kullanıcı2 : "Neim",
            gün1 : "9/01/2021",
            gün2 : "9/4/2021" 
        },
        {
            odaId : 2,
            kullanıcı1 : "Nedim",
            kullanıcı2 : "Neim",
            gün1 : "9/02/2021",
            gün2 : "9/11/2021" 
        },
        {
            odaId : 3,
            kullanıcı1 : "Nedim",
            kullanıcı2 : "Neim",
            gün1 : "9/02/2021",
            gün2 : "9/3/2021" 
        }
    ])
    var dateChanger = (inputchar) =>{
        if (inputchar === ">") {
            var x = dateInterval
            x.setDate(x.getDate() +7)
            setdateInterval(prev =>(x))
        }
        if (inputchar === "<") {
            var x = dateInterval
            x.setDate(x.getDate() - 7)
            setdateInterval(prev =>(x))
        }
    }
    return (
        <div className="schedule">
            <Navbar/>
            <Datepicker dateChanger = {dateChanger}/>
            <Odalar dates = {dateInterval}/>
        </div>
    )
}

export default Schedule
