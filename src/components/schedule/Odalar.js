import React,{useState,useEffect} from 'react'
import Oda from './Oda'

function Odalar({odalar,dates}) {

        const [list2, setList2] = useState()
        const interval = dates.getDate()
        useEffect(() => {
            console.log("çalışıyoooooo")
            let list1 = []
            for (let index = interval; index < interval + 7; index++) {  
                let x = dates
                var today = x;      
                list1.push({
                    dayName : today.toLocaleString("default", { weekday: "long" }),
                    day : today.getDate()
                })
                x.setDate(x.getDate() + 1)
                console.log(x)
                
            }
            setList2(list1)
            return () => {
                clearInterval(interval)
            }
        }, [dates,odalar])
     console.log("nabeeeerrrr")
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
