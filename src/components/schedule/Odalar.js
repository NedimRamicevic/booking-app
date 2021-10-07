import React,{useState,useEffect} from 'react'
import Oda from './Oda'

function Odalar({odalar,dates}) {
        const [list2, setList2] = useState()
        const interval = dates.getDate()
        useEffect(() => {
            let list1 = []
            let x = new Date(`${dates.getMonth() + 1}/ ${dates.getDate()}/${dates.getFullYear()}`)
            for (let index = interval; index < interval + 7; index++) {  
                var today = x;      
                list1.push({
                    dayName : today.toLocaleString("default", { weekday: "long" }),
                    day : today.getDate()
                })
                x.setDate(x.getDate() + 1)
                
            }
            setList2(list1)
            return () => {
                clearInterval(interval)
            }
        }, [dates,odalar])
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
