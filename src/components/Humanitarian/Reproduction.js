import React from 'react'
import './Humanitarian.css'

const Reproduction = () => {

    return(
        <div data-aos="fade-right" data-aos-anchor="#fetus" className="reproduction">
          <img data-aos="fade-right" data-aos-anchor="#fetus" className="cross" src="https://image.flaticon.com/icons/png/512/448/448945.png" />
           <div className="CancerCard">
               <h2  id="fetus">Reproduksjon og fosterskader</h2>
                    <p className="ConP">
                        Både i områdene der det er gjennomført prøvespregninger og i Hiroshima og Nagasaki 
                        har man observert et økt antall fosterskader. 
                        På samme måte som at cellevev i hurtig vekst er spesielt følsomt for stråling er også fosteret svært sårbart. 
                        Strålingseksponering av fostre har vist seg å øke risikoen for kreftutvikling i barnealderen. 
                        Man har også sett en økt forekomst av hjerneskader blant nyfødte som i fosterlivet ble 
                        utsatt for radioaktiv stråling da bombene falt over Hiroshima og Nagasaki.
                    </p>
                    <p className="ConP">
                        Forskning på dyr har vist at radioaktiv stråling kan gi opphav til arvelige misdannelser. 
                        Man har ikke kunnet bekrefte at det samme skjer hos mennesker. 
                        Det kan ha å gjøre med at mange slike genetiske endringer arves recessivt, 
                        det vil si at bare når begge foreldrene har samme genforandring fører dette til sykdom hos barnet. 
                        Slike genetiske endringer er vanskelige å påvise i befolkningsstudier, 
                        og effekten av disse vil ofte først vise seg i senere generasjoner. 
                    </p>          
            </div>
        </div>
    )
}

export default Reproduction