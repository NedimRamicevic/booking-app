import React,{useState,useEffect} from 'react'
import Oda from './Oda'

function Odalar({odalars,dates}) {
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const [list2, setList2] = useState()
        
        useEffect(() => {
            let list1 = []
            for (let index = 1; index <= 7; index++) {  
                var today = new Date(`10/${index}/2021`);      
                list1.push({
                    dayName : days[today.getDay()],
                    day : today.getDate()
                })
            }
            setList2(list1)
       
        }, [])
        return (
            <div className="">  
                <div className="odalarheader">
                <p>Odalar</p>
                {list2 ? (
                    list2.map(x => 
                        <button>{x.day}{"\n"}{x.dayName}</button>
                        )
                ):null}
                </div>
                <div className="odalars">
                        {odalar ? (
                            odalar.map(oda=>
                                <Oda oda = {oda} ></Oda>
                                )
                        ):null}
                </div>
            </div>
        )
}

export default Odalar
