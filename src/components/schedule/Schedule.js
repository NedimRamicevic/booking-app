import React from 'react'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import Odalar from './Odalar'
import DateContext from '../Contexts/DateContext'

function Schedule() {
    
    return (
        <div className="schedule">
            <DateContext>
                <Navbar/>
                <Datepicker  />
                <Odalar />
            </DateContext>
        </div>
    )
}

export default Schedule
