import React, { useState, useEffect } from "react";
import Oda from "./Oda";
import DateProvider from '../Contexts/DateContext'

function Odalar() {

  const value = React.useContext(DateProvider)
  const dates = value.dateInterval.dateInterval
  const initOdalar = value.odalar.odalar

  const [list2, setList2] = useState();
  const interval = dates.getDate();
  const [filtrelenmiş, setFiltrelenmiş] = useState([]);
  
  var checkDates = () => {
    var date1 = new Date(dates);
    var date2 = new Date(dates);
    date2.setDate(date2.getDate() + 7);
    var filteredList = [];
    var member = {};
    for (const key in initOdalar) {
      if (Object.hasOwnProperty.call(initOdalar, key)) {
        const oda = initOdalar[key];
        var memba = {
          odaId: oda.odaId,
          events: [],
        };
        for (const event in oda.events) {
          if (Object.hasOwnProperty.call(oda.events, event)) {
            const element = oda.events[event];
            if (
              ((date1 <= new Date(element.gün1)) &
                (new Date(element.gün1) <= date2)) |
              ((date1 <= new Date(element.gün2)) &
                (new Date(element.gün2) <= date2))
            ) {
              member = {
                gün1: element.gün1,
                gün2: element.gün2,
              };
              memba.events.push(member);
            }
          }
        }
      }
      filteredList.push(memba);
    }
    setFiltrelenmiş(filteredList);
  };
  useEffect(() => {
    checkDates();
    let list1 = [];
    let x = new Date(
      `${dates.getMonth() + 1}/ ${dates.getDate()}/${dates.getFullYear()}`
    );
    for (let index = interval; index < interval + 7; index++) {
      var today = x;
      list1.push({
        dayName: today.toLocaleString("default", { weekday: "long" }),
        day: today.getDate(),
      });
      x.setDate(x.getDate() + 1);
    }
    setList2(list1);
    return () => {
      clearInterval(interval);
    };
  }, [dates]);
  console.log("dateeeeeeee", dates);
  return (
    <div className="">
      <div className="odalarheader">
        <p>Odalar</p>
        {list2
          ? list2.map((x) => (
              <button>
                {x.day}
                {"\n"}
                {x.dayName}
              </button>
            ))
          : null}
      </div>
      <div className="odalars">
        {filtrelenmiş
          ? filtrelenmiş.map((oda) => <Oda oda={oda} dates={dates}></Oda>)
          : null}
      </div>
    </div>
  );
}

export default Odalar;
