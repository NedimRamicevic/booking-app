import React, { useEffect, useState } from "react";
import {monthNames} from '../Contexts/Odalar'
import {DateProvider} from '../Contexts/DateContext'

export default function Oda({ oda }) {
  const value = React.useContext(DateProvider)
  const dates = value.dateInterval.dateInterval
  var sonDate = new Date(dates)
  sonDate.setDate(sonDate.getDate() + 7)

  const [eventSayısı, setEventSayısı] = useState();
  useEffect(() => {
    let list = [];
    var num = [];
    for (let index = 0; index < 7 ; index++) {
        num = []
      for (const key in oda.events) {
          if (Object.hasOwnProperty.call(oda.events, key)) {
              const element = oda.events[key];
              var son = new Date(element.günler.gün2);
              var ilk = new Date(element.günler.gün1);
              let now = new Date(dates)
              now.setDate(now.getDate() + index)
              if (ilk <= now & now <= son) {
                if (new Date(ilk) < new Date(dates)) {
                  let iterv = (new Date(son - now).getDate()) - 1
                  num =[1,ilk,son,element.kullanıcılar.kullanıcı1,element.kullanıcılar.kullanıcı2,index+1,iterv];
                  index = index + iterv 
                  
                }
                else{
                  let iterv = (new Date(son - ilk).getDate()) - 1
                num =[1,ilk,son,element.kullanıcılar.kullanıcı1,element.kullanıcılar.kullanıcı2,index+1,iterv];
                index = index + iterv 
                }
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
                    backgroundColor: "turquoise", gridColumn :  `${x[5]} / ${x[5] + x[6] + 1}`
                  }}
                >
                  <h6>{`${x[3]} - ${x[4]}`}</h6>
                  <h6>{`${new Date(x[1]).getDate()} ${
                    monthNames[new Date(x[1]).getMonth()]
                  } -${new Date(x[2]).getDate()} ${
                    monthNames[new Date(x[2]).getMonth()]
                  } `}</h6>
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
