import react,{useState} from 'react'
import {initOdalar} from './Odalar'


export const DateProvider = react.createContext()

export default function DateContext({children}) {

const [odalar, setOdalar] = useState(initOdalar)
const [dateInterval, setDateInterval] = useState(new Date("9/1/2021"))
const value = {
    odalar : {
        odalar,
        setOdalar
    },
    dateInterval : {
        dateInterval,
        setDateInterval
    }
}

    return (
        <DateProvider.Provider value ={value} >
            {children}
        </DateProvider.Provider>
    )
}
