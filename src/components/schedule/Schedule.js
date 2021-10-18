import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import Odalar from './Odalar'
import DateContext from '../Contexts/DateContext'
function Schedule() {
    const [dateInterval, setdateInterval] = useState(new Date("9/1/2021"))
    
    console.log("object",dateInterval)
    const [odalar, setodalar] = useState(initOdalar)

    var aySecildi = (girdi) =>{
        //buraya ayı seçince hangi aysa o ayın ilk gününü dateIntervale verirsin. Aşagıdakini dinamik yaparsın
        // her seçilen ay için değişince odalar da otomatik değişir.
        setdateInterval(new Date(`${girdi}/1/2021`))
        let newDate = new Date(`${girdi}/1/2021`)
        setodalar(prev =>(
            initOdalar.filter(i =>newDate.getFullYear() === (new Date(i.gün1)).getFullYear() & newDate.getMonth() === (new Date(i.gün1)).getMonth() & (newDate.getDate() <= (new Date(i.gün1)).getDate() & newDate.getDate() < (new Date(i.gün1)).getDate() + 7))
        ))
    }

    var dateChanger = (inputchar) =>{
        if (inputchar === ">") {
            let x = dateInterval
            x.setDate(x.getDate() +7)
            setdateInterval(new Date(`${x.getMonth() + 1}/${x.getDate()}/2021`))
            setodalar(prev =>(
                initOdalar.filter(i => (dateInterval.getDate() <= (new Date(i.gün1)).getDate() & dateInterval.getDate() < (new Date(i.gün1)).getDate() + 7))
            ))
        }
        if (inputchar === "<") {
            let x = dateInterval
            x.setDate(x.getDate() - 7)
            setdateInterval(new Date(`${x.getMonth() + 1}/${x.getDate()}/2021`))
            setodalar(prev =>(
                initOdalar.filter(i => (x.getDate() <= (new Date(i.gün1)).getDate() & x.getDate() < (new Date(i.gün1)).getDate() + 7))
            ))
        }
        
    }
    useEffect(() => {

        setodalar(prev =>(
            prev.filter(i => (dateInterval.getDate() <= (new Date(i.gün1)).getDate() & dateInterval.getDate() < (new Date(i.gün1)).getDate() + 7))
            ))
            
        }, [])
    return (
        <div className="schedule">
            <DateContext>
                <Navbar/>
                <Datepicker dateChanger = {dateChanger} dateInterval={dateInterval} aySecildi={aySecildi}/>
                <Odalar dates = {dateInterval} odalar ={odalar}/>
            </DateContext>
        </div>
    )
}

export default Schedule
