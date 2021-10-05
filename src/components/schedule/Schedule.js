import React from 'react'
import Navbar from './Navbar'
import Datepicker from './Datepicker'
import Odalar from './Odalar'

function Schedule() {
    return (
        <div className="schedule">
            <Navbar/>
            <Datepicker/>
            <Odalar/>
        </div>
    )
}

export default Schedule
