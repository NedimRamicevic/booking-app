import React, { useState, useEffect } from "react";
import Oda from "./Oda";

function Odalar({ odalar, dates }) {
  const [list2, setList2] = useState();
  const interval = dates.getDate();
  const [filtrelenmiş, setFiltrelenmiş] = useState([])
  const initOdalar = [
    {
      odaId: 1,
      kullanıcı1: "Nedim",
      kullanıcı2: "Neim",
      events: [
        { gün1: "9/01/2021", gün2: "9/2/2021" },
        { gün1: "9/03/2021", gün2: "9/5/2021" },
      ],
    },
    {
      odaId: 2,
      kullanıcı1: "Nedim",
      kullanıcı2: "Neim",
      events: [
        { gün1: "9/01/2021", gün2: "9/2/2021" },
        { gün1: "9/04/2021", gün2: "9/4/2021" },
      ],
    },
    {
      odaId: 3,
      kullanıcı1: "Nedim",
      kullanıcı2: "Neim",
      events: [
        { gün1: "9/01/2021", gün2: "9/2/2021" },
        { gün1: "9/04/2021", gün2: "9/6/2021" },
      ],
    },
    {
      odaId: 4,
      kullanıcı1: "Nedim",
      kullanıcı2: "Neim",
      events: [
        { gün1: "9/01/2021", gün2: "9/2/2021" },
        { gün1: "9/03/2021", gün2: "9/4/2021" },
      ],
    },
  ];
  var checkDates = () => {
      
    var filteredList = [];
    var member = {}
    for (const key in initOdalar) {
      if (Object.hasOwnProperty.call(initOdalar, key)) {
        const oda = initOdalar[key];
        var memba = {
          odaId: oda.odaId,
          kullanıcı1: oda.kullanıcı1,
          kullanıcı2: oda.kullanıcı1,
          events: [],
        };
        for (const event in oda.events) {
          if (Object.hasOwnProperty.call(oda.events, event)) {
            const element = oda.events[event];
            if (new Date(element.gün1).getMonth() === dates.getMonth()
                &
              dates.getDate() <
              new Date(element.gün1).getDate() <
              dates.getDate() + 7
            ) {
                console.log("bilgiler", dates)
                console.log("bilgiss", element.gün1)
               member = {
                gün1: element.gün1,
                gün2: element.gün2,
              };
              memba.events.push(member);
            }
          }
          console.log("2222",filteredList)
        }
    }
    filteredList.push(memba);
    }
    console.log("object",filteredList)
    setFiltrelenmiş(filteredList)
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
  }, [dates, odalar]);
  console.log("filteredList", filtrelenmiş);
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
        {filtrelenmiş ? filtrelenmiş.map((oda) => <Oda oda={oda}></Oda>) : null}
      </div>
    </div>
  );
}

export default Odalar;
