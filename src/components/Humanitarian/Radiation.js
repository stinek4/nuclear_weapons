import React from 'react'
import './Humanitarian.css'

const Radiation = () => {

    return(
        <div className="Radiation">
           <div data-aos="fade-right" data-aos-anchor="#radiation" className="RadCard">
           <img data-aos="fade-right" data-aos-anchor="#radiation" className="cross" src="https://image.flaticon.com/icons/png/512/448/448945.png" />
               <h2>Radioaktiv stråling</h2>
                    <p className="ConP">
                        Omkring 15 prosent av energien ved en atombombesprengning frigjøres som radioaktiv (ioniserende) stråling. 
                        En tredel av dette er gamma- og nøytronstråling (initialstråling) direkte fra ildkulen og resten etterfølgende stråling 
                        fra de flere hundre radioaktive isotopene som dannes ved eksplosjonen. 
                        Disse har en halveringstid som varierer fra sekunder til mange tusen år.
                    </p>
                    <p id="radiation" className="ConP">
                        Mennesker kan skades av den umiddelbare gamma- og nøytronstrålingen fra bomben (initialstrålingen), 
                        samt av det radioaktive nedfallet som avgir stråling i nærområdene og lenger borte over lang tid. 
                        Det er kroppens celler som skades av strålingen. Om man utsettes for en dødelig dose stråling kan døden 
                        inntreffe umiddelbart eller innen noen måneder.
                    </p>
                    <p className="ConP">
                        Strålingsskader kan også utvikles til kreft dersom kroppens celler ikke har tid til å reparere seg 
                        selv eller gjør feilaktige reparasjoner. Blodkreft (leukemi) kan utvikles etter få år, 
                        mens krefttumorer i indre organer viser seg etter enda lengre tid.
                    </p>
                    <p className="ConP">
                        Hos gravide kvinner kan fosteret skades av strålingen, noe som kan føre til abort eller misdannelser. 
                        Det eksisterer stor uro for at strålingen også kan skade arvemassen og gjennom det påvirke kommende generasjoner.
                    </p>
                    <p className="ConP">
                        Lenge etter en atomvåpeneksplosjon blir radioaktivitet spredt i områder rundt eksplosjonen og, 
                        avhengig av vær og vind, også langt fra eksplosjonsstedet. Dette kalles radioaktivt nedfall. 
                        Mennesker kan påvirkes av nedfallet direkte gjennom å bli truffet av fint radioaktivt støv som regner ned. 
                        De kan også få i seg radioaktive partikler gjennom å drikke melk fra kuer som har beitet forurenset gress eller å 
                        spise vekster og dyr som har fått i seg radioaktivitet fra nedfallet.
                    </p>
            </div>
            <div data-aos="fade-right" data-aos-anchor="#straleskade" className="StraleCard">
            <img data-aos="fade-right" data-aos-anchor="#straleskade" className="cross" src="https://image.flaticon.com/icons/png/512/448/448945.png" />
                <h2>Strålingsskader</h2>
                    <p className="ConP">
                        Når en kroppscelle bestråles blir energien som finnes i strålingen overført til cellen. 
                        Radioaktiv stråling forårsaker skader på DNAet, det genetiske materialet i levende celler. 
                        En celle kan til en viss grad reparere slike skader, spesielt dersom skadene ikke er så store. 
                        Men også feilaktige reparasjoner kan skje, noe som kan lede til kreft. 
                        Ettersom kreftutvikling vanligvis skjer i løpet av mange celledelinger kan det gå mange tiår før kreftutviklingen blir synlig. 
                    </p>
                    <p className="ConP">
                        Ved høye stråledoser dør cellen. 
                        I organer med normalt høy celledeling klarer ikke kroppen å erstatte de ødelagte cellene raskt nok, 
                        og vevet slutter å fungere. Dette kan være dødelig.
                    </p>
                    <p id="straleskade" className="ConP">
                        Jo høyere stråledose, jo tidligere kommer det sykdomstegn. 
                        Ved en liten stråledose opplever mange kvalme og tretthet. 
                        Ved mer omfattende stråledoser, opptrer tre sykdomsbilder hos mennesker:
                    </p>
                    <p className="ConP">
                        Det første sykdomsbildet skyldes skade på kroppens bloddannende organ: beinmargen. 
                        Her produseres røde og hvite blodlegemer, samt blodplatene som er viktige for blodets evne til å levre seg og stanse blødning. 
                        De hvite blodlegemene deltar i kroppens forsvar mot bakterier. 
                        Ved en middels stråledose skades beinmargen med økt blødningstendenes og nedsatt infeksjonsforsvar som følger. 
                        Personen opplever gjerne kvalme, hud- og tarmblødning samt infeksjonstegn. 
                        Med adekvat og omfattende medisinsk hjelp kan pasienten overleve, men uten slik behandling vil mange dø. 
                    </p>
                    <p className="ConP">
                        Ved en høyere stråledose kommer symptomer fra magesekk og tarmer, i form av kvalme og brekninger, blodig diaré, uttørking og feber. 
                        Den strålesyke har stor risiko for å dø i løpet av 1-2 uker.
                     </p>
                    <p className="ConP">
                        Det tredje sykdomsbildet opptrer ved svært høye stråledoser, 
                        og preges av strålepåvirkning av hjernen med hodeverk, tretthet, apati, koma og sjokktilstand. 
                        Tilstanden medfører død i løpet av timer eller få dager. 
                    </p>
            </div>
        </div>
    )
}

export default Radiation