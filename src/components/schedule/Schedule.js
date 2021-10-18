import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import Odalar from './Odalar'
import DateContext from '../Contexts/DateContext'

function Schedule() {
    const [dateInterval, setdateInterval] = useState(new Date("9/1/2021"))
    

    return (
        <div className="schedule">
            <DateContext>
                <Navbar/>
                <Datepicker  dateInterval={dateInterval}/>
                <Odalar dates = {dateInterval} />
            </DateContext>
        </div>
    )
}

export default Schedule
