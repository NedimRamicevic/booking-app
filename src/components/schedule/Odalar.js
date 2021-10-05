import React,{useState,useEffect} from 'react'
import Oda from './Oda'

function Odalar() {
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const [list2, setList2] = useState()
        const [odalar, setodalar] = useState([
            {
                odaId : 1,
                kullanıcı1 : "Nedim",
                kullanıcı2 : "Neim",
                gün1 : "9/01/2021",
                gün2 : "9/3/2021" 
            },
            {
                odaId : 2,
                kullanıcı1 : "Nedim",
                kullanıcı2 : "Neim",
                gün1 : "9/01/2021",
                gün2 : "9/3/2021" 
            },
            {
                odaId : 3,
                kullanıcı1 : "Nedim",
                kullanıcı2 : "Neim",
                gün1 : "9/01/2021",
                gün2 : "9/3/2021" 
            }
        ])
        useEffect(() => {
            let list1 = []
            for (let index = 1; index <= 7; index++) {  
                var today = new Date(`2021/10/${index}`);      
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
