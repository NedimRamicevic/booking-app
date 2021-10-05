import React,{useState,useEffect} from 'react'

function Odalar() {
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const [list2, setList2] = useState()
        const [odalar, setodalar] = useState()
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
            </div>
        )
}

export default Odalar
