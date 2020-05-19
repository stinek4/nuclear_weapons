import React from 'react'
import './Humanitarian.css'

const Cancer = () => {

    return(
        <div data-aos="fade-right" data-aos-anchor="#kreft" className="cancer">
           <img data-aos="fade-right" data-aos-anchor="#kreft" className="cross" src="https://image.flaticon.com/icons/png/512/448/448945.png" />
           <div className="CancerCard">
               <h2  id="kreft">Kreft</h2>
                    <p className="ConP">
                        Risikoen for å utvikle kreft er høyere hos dem som overlever en atombombeeksplosjon enn hos andre. 
                        Den økte risikoen omfatter en lang rekke krefttyper, inkludert leukemi (blodkreft). 
                        Risikoen for leukemi er størst blant unge personer.
                    </p>
                    <p className="ConP">
                        Studier av de overlevende etter atombombingen av Hiroshima og Nagasaki viser at den økte kreftrisikoen er livslang. 
                        Det tok imidlertid flere år før denne effekten ble synlig. 
                        Først så man en forbigående økning i leukemitilfeller, 
                        senere har man sett en høyere forekomst av de fleste kreftformer enn det som er vanlig blant andre.   
                     </p>
                    <p className="ConP">
                        Beregninger viser at radioaktivt nedfall fra atmosfæriske prøvesprengninger på 1950- og 1960-tallet 
                        vil medføre 600 000 ekstra krefttilfeller i verden fram til år 2100. 
                    </p>
                    
            </div>
        </div>
    )
}

export default Cancer