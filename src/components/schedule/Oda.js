import React, { useEffect, useState } from "react";

export default function Oda({ oda,dates }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [eventSayısı, setEventSayısı] = useState();
  useEffect(() => {
    let list = [];
    var iter = 0;
    var num = [];
    for (const key in oda.events) {
      if (Object.hasOwnProperty.call(oda.events, key)) {
        const element = oda.events[key];
        let son = new Date(element.gün2);
        let ilk = new Date(element.gün1);
        if (son.getDate() - ilk.getDate() > 6) {
          iter = 5;
        } else {
          iter =iter + (son.getDate() - ilk.getDate());
        }
      }
    }
    for (let index = 0; index < 7 ; index++) {
        num = []
      for (const key in oda.events) {
          if (Object.hasOwnProperty.call(oda.events, key)) {
              const element = oda.events[key];
              let son = new Date(element.gün2);
              let ilk = new Date(element.gün1);
              let now = new Date(dates)
              now.setDate(now.getDate() + index)
              console.log("nooooow",now)
              if (ilk <= now & now <= son) {
                num =[1];
                break;
              } 
          }
      }
      list.push(num);
    }
    console.log(oda)
    console.log("doldurss",list)
    setEventSayısı(list);
  }, [oda]);
  return (
    <div className="oda">
      <div className="odagün">
        <p>{`Oda ${oda.odaId}`} </p>
      </div>
      <div className="innerkarosel">
        {eventSayısı
          ? eventSayısı.map((x, index) => {
              return x > 0 ? (
                <div
                  className="odagün"
                  style={{
                    backgroundColor: "turquoise",
                  }}
                >
                  <h10>{`${oda.kullanıcı1} - ${oda.kullanıcı2}`}</h10>
                  <h11>{`${new Date(oda.gün1).getDate()} ${
                    monthNames[new Date(oda.gün1).getMonth()]
                  } -${new Date(oda.gün2).getDate()} ${
                    monthNames[new Date(oda.gün2).getMonth()]
                  } `}</h11>
                </div>
              ) : (
                <div className="odagün">
                  <text>boş</text>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
