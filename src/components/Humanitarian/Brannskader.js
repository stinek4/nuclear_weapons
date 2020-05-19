import React from 'react'
import './Humanitarian.css'

const Brannskader = () => {

    return(
        <div data-aos="fade-right" data-aos-anchor="#brannskader" className="Brannskader">
            <img data-aos="fade-right" data-aos-anchor="#brannskader" className="cross" src="https://image.flaticon.com/icons/png/512/448/448945.png" />
           <div className="BrannCard">
               <h2  id="brannskader">Brannskader</h2>
                    <p className="ConP">
                        Behandling av brannskader er blant de mest ressurskrevende behandlinger som finnes. 
                        Å behandle brannskadde mennesker utgjør derfor en stor utfordring 
                        for helsevesenet etter en atomvåpeneksplosjon.
                    </p>
                    <p className="ConP">
                        Antallet behandlingsplasser for alvorlig brannskadete er ikke mange. 
                        I Norge kan man til enhver tid behandle 8-10 alvorlig brannskadde på Haukeland sykehus i Bergen, 
                        og i hele Europa kanskje noen hundre tilfeller. 
                        Og dette er tall for en normalsituasjon, når verken sykehus eller personell er slått ut av atomvåpeneksplosjoner.    
                    </p>
                    <p className="ConP">
                        I Nagasaki beregnes det at 95 prosent av de totalt 25 000 skadde hadde brannskader. 
                        Det er ikke vanskelig å forstå at de tilgjengelige brannskadeplassene på sykehusene ikke vil rekke langt. 
                        Man kan heller ikke regne med at det etter en atombombeeksplosjon vil være transportkapasitet for å 
                        frakte alvorlig skadde til andre land.
                    </p>
                    
            </div>
        </div>
    )
}

export default Brannskader