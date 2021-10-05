import React from 'react'

export default function Oda({oda}) {
    var list = [1,2,3,4,5,6,7]
    const selectedDays = [1,7]
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    console.log(oda)
    return (
        <div className="oda">
            <p>{`Oda ${oda.odaId}`} </p>
            {oda ? (
                list.map(x =>
                        {return  (new Date(oda.gün1)).getDate() <= x & x <=  (new Date(oda.gün2)).getDate()  ?(
                            <div className="odagün">
                            {/* <div className="odagün" style={{gridColumn: "2/5"}}> */}
                            <h10>{`${oda.kullanıcı1} - ${oda.kullanıcı2}`}</h10>
                            <h11>{`${(new Date(oda.gün1)).getDate()} ${monthNames[(new Date(oda.gün1)).getMonth()]} -${(new Date(oda.gün2)).getDate()} ${monthNames[(new Date(oda.gün2)).getMonth()]} `}</h11>
                            </div>
                        ):
                        <text>boş</text>
                        }

                    )
            ):null
            }
        </div>
    )
}
