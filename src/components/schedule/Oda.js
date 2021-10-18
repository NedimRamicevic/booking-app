import React, { useEffect, useState } from "react";
import {monthNames} from '../Contexts/Odalar'
import {DateProvider} from '../Contexts/DateContext'

export default function Oda({ oda }) {
  const value = React.useContext(DateProvider)
  const dates = value.dateInterval.dateInterval

  const [eventSayısı, setEventSayısı] = useState();
  useEffect(() => {
    let list = [];
    var num = [];
    for (let index = 0; index < 7 ; index++) {
        num = []
      for (const key in oda.events) {
          if (Object.hasOwnProperty.call(oda.events, key)) {
              const element = oda.events[key];
              let son = new Date(element.günler.gün2);
              let ilk = new Date(element.günler.gün1);
              let now = new Date(dates)
              now.setDate(now.getDate() + index)
              if (ilk <= now & now <= son) {
                num =[1,ilk,son];
                break;
              } 
          }
      }
      list.push(num);
    }
    setEventSayısı(list);
  }, [oda,dates]);
  return (
    <div className="oda">
      <div className="odagün">
        <p>{`Oda ${oda.odaId}`} </p>
      </div>
      <div className="innerkarosel">
        {eventSayısı
          ? eventSayısı.map((x) => {
              return x[0] > 0 ? (
                <div
                  className="odagün"
                  style={{
                    backgroundColor: "turquoise",
                  }}
                >
                  <h10>{`${oda.events[0].kullanıcılar.kullanıcı1} - ${oda.events[0].kullanıcılar.kullanıcı2}`}</h10>
                  <h10>{`${new Date(x[1]).getDate()} ${
                    monthNames[new Date(x[1]).getMonth()]
                  } -${new Date(x[2]).getDate()} ${
                    monthNames[new Date(x[2]).getMonth()]
                  } `}</h10>
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
