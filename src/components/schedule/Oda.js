import React,{useEffect,useState} from 'react'

export default function Oda({oda}) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    const [eventSayısı, setEventSayısı] = useState()
    console.log(oda)
    useEffect(() => {
        let list = []
        var iter = 0
        for (const key in oda.events) {
            if (Object.hasOwnProperty.call(oda.events, key)) {
                const element = oda.events[key];
                var son = new Date(oda.gün2)
        var ilk = new Date(oda.gün1)
        if ((son.getDate() - ilk.getDate())>6) {
            iter = 5
        }
        else{
            iter = son.getDate() - ilk.getDate()
        }
            }
        }
        for (let index = 1; index < 8 - iter; index++) {
            if (index === ilk.getDate()) {
                list.push(son.getDate())
            }
            else{
                list.push(0)
            }           
        }
        setEventSayısı(list)
    }, [])
    return (
        <div className="oda">
            <div className="odagün"><p>{`Oda ${oda.odaId}`} </p></div>
      <div className="innerkarosel">
          {eventSayısı ? (
                eventSayısı.map((x, index) =>
                        {return x > 0 ?(
                            
                            <div className="odagün" style={{gridColumn: `${index+1}/${x+1}`,backgroundColor:"turquoise"}}>
                            <h10>{`${oda.kullanıcı1} - ${oda.kullanıcı2}`}</h10>
                            <h11>{`${(new Date(oda.gün1)).getDate()} ${monthNames[(new Date(oda.gün1)).getMonth()]} -${(new Date(oda.gün2)).getDate()} ${monthNames[(new Date(oda.gün2)).getMonth()]} `}</h11>
                            </div>
                        ):
                        <div className="odagün"><text>boş</text></div>
                        }

                    )
            ):null
            }
      </div>
    </div>
    )
}
