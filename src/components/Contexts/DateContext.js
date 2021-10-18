import react,{useEffect, useState} from 'react'
import initOdalar from './Odalar'


export const DateProvider = react.createContext()

export default function DateContext({children}) {

const [odalar, setOdalar] = useState(initOdalar)


    return (
        <DateProvider.Provider>
            {children}
        </DateProvider.Provider>
    )
}
