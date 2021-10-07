import React,{useState,useEffect} from 'react'
import Oda from './Oda'

function Odalar({odalar,dates}) {
        const [list2, setList2] = useState()
        const interval = dates.getDate()
        const initOdalar = [
            {
                odaId : 1,
                kullanıcı1 : "Nedim",
                kullanıcı2 : "Neim",
                events : {
                    1 : {gün1 : "9/01/2021",
                    gün2 : "9/2/2021" },
                    2 : {gün1 : "9/03/2021",
                    gün2 : "9/4/2021" }
                } 
            },
            {
                odaId : 2,
                kullanıcı1 : "Nedim",
                kullanıcı2 : "Neim",
                events : {
                    1 : {gün1 : "9/01/2021",
                    gün2 : "9/2/2021" },
                    2 : {gün1 : "9/03/2021",
                    gün2 : "9/4/2021" }
                } 
            },
            {
                odaId : 3,
                kullanıcı1 : "Nedim",
                kullanıcı2 : "Neim",
                events : {
                    1 : {gün1 : "9/01/2021",
                    gün2 : "9/2/2021" },
                    2 : {gün1 : "9/03/2021",
                    gün2 : "9/4/2021" }
                } 
            },
            {
                odaId : 4,
                kullanıcı1 : "Nedim",
                kullanıcı2 : "Neim",
                events : {
                    1 : {gün1 : "9/01/2021",
                    gün2 : "9/2/2021" },
                    2 : {gün1 : "9/03/2021",
                    gün2 : "9/4/2021" }
                } 
            }
        ]
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
                            initOdalar.map(oda=>
                                <Oda oda = {oda} ></Oda>
                                )
                        ):null}
                </div>
            </div>
        )
}

export default Odalar
