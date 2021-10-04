import React, {useEffect,useState} from 'react'
import Day from './Day'

function Calendar() {
    const list = ["S","M","T","W","T","F","S"]
    const [list2, setList2] = useState()
    useEffect(() => {
        let list1 = []
        for (let index = 1; index < 30; index++) {        
            list1.push(index)
            console.log(index)
        }
        setList2(list1)
   
    }, [])
    return (
        <div className="calendar">  
            <div className="calendarheader">
            {
                list.map(x => 
                    <p>{x}</p>
                    )
            }
            </div>
            <div className="daycontainer">
            {list2 ? (
                list2.map(x => 
                    <Day data = {x}></Day>
                    )
            ):null}
            </div>
        </div>
    )
}

export default Calendar
