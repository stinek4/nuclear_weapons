import React, {useState} from 'react'
import TPNW from '../files/TPNW'
import ContentAvtalen from './ContentAvtalen'
import './Search.css'

const Search = () =>{
    const [tpnw, setTpnw] = useState(TPNW)

    const filterTPNW = (e) =>{
        setTpnw(
            TPNW.filter( 
            word =>
            word.text.toLowerCase().includes(e.target.value.toLowerCase()
            )
        ))
            
        
        
    }

    return(
        <div className="search">
            <input type="text" placeholder="Search in document..." onInput={filterTPNW} onChangeText={filterTPNW}/>
            <div className="array content">
            {
                tpnw.map(
                    (t, i) =>
                    <ContentAvtalen key={i} article={t.article} title={t.title} text={t.text} />
                )
            }
            </div>
        </div>
    )
}

export default Search