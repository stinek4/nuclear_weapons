import React from 'react'
import {Router, NavLink} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import './CitiesAppeal.css'

const CitiesAppeal = () => {
    
    const history = createBrowserHistory();
    return(
        <div className="citiesAppeal">
            <h1>ICAN Cities Appeal</h1>
            <h3>Kommuneappellen</h3>
                <div className="cityBody">
                         <div data-aos="fade-down" data-aos-anchor="#cityOne" className="cityCard">
                        <h2>HVA ER ICANS KOMMUNEAPPEL</h2>
                            <p className="ConP">
                                ICAN inviterer norske byer og lokalsamfunn til å markere sin støtte til FNs atomvåpenforbud. 
                                Dette er en god mulighet for byen din til å bidra i kampen mot atomvåpen!
                            </p>
                            <p id="cityOne" className="ConP">
                                FN-traktaten som forbyr atomvåpen ble vedtatt av et stort flertall av FNs medlemsland i juli 2017. 
                                Nobelkomiteen har anerkjent atomvåpenforbudet som «et viktig, kanskje avgjørende, 
                                skritt på veien mot en atomvåpenfri verden».
                            </p>
                            <p className="ConP">
                                Norge har så langt valgt å gå imot FN-flertallet og stå utenfor denne viktige, globale avtalen. 
                                Gjennom ICAN Cities Appeal kan norske byer bidra til å øke presset på nasjonale myndigheter 
                                til å bli del av forbudstraktaten.
                            </p>
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#byEn" className="cityPicture">
                        <img className="by" id="byEn" src="https://image.flaticon.com/icons/svg/2942/2942104.svg" />
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#cityTwo" className="cityCard">
                        <h2>HVORFOR SKAL KOMMUNER SIGNERE?</h2>
                            <p className="ConP">
                                Lokale myndigheter har et ansvar for å markere motstand mot sikkerhetspolitikk som baserer seg på masseødeleggelsesvåpen. 
                                ICAN Cities Appeal gir norske byer en mulighet til å øke presset på regjeringen til å signere atomvåpenforbudet 
                                som ble vedtatt av et stort flertall av FNs medlemsland i 2017.
                            </p>
                            <ol>
                                <p id="cityTwo" className="ConP">
                                    Fire gode grunner til å signere ICANs Cities Appeal:
                                </p>
                                <li>Byer er et hovedmål for bruk at atomvåpen</li>
                                <li>Kommunen kan spille en positiv rolle i riktig retning, mot atomvåpen</li>
                                <li>Kommunen står på riktig side av historien</li>
                                <li>Regjeringen har sagt at de vil være en pådriver mot atomvåpen. Da er det ikke drastisk at Norske kommuner gjør det samme</li>
                            </ol>
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#byTo" className="cityPicture">
                        <img className="by" id="byTo" src="https://image.flaticon.com/icons/svg/2942/2942104.svg" />
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#cityThree" className="cityCard">
                        <h2>FORSLAG TIL TEKST</h2>
                            <p className="ConP">
                                «Min by (navn på by eller kommune) er dypt bekymret for den alvorlige trusselen atomvåpen utgjør overfor byer og land i hele verden.
                                Vi i ( by/kommune) mener at vi har rett til å leve i en verden uten atomtrussel. 
                                Enhver bruk av atomvåpen, enten med hensikt eller ved uhell, vil være katastrofalt, 
                                ufattelig og vedvarende ødeleggende for mennesker og miljø. 
                                Derfor ønsker vi varmt velkommen tilslutning til FNs Atomvåpenforbudstraktat, 
                                og oppfordrer Stortinget å gjøre det samme.»
                            </p>
                            <p id="cityThree" className="ConP">
                                Dette er bare et forslag. Formuler dere akkurat som dere vil bare dere vedtar støtte til FNs Atomvåpenforbudstraktat.
                            </p>
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#byTre" className="cityPicture">
                        <img className="by" id="byTre" src="https://image.flaticon.com/icons/svg/2942/2942104.svg" />
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#cityFour" className="cityCard">
                        <h2>HVORDAN SKAL KOMMUNER SIGNERE?</h2>
                            <p className="ConP">
                                Vil du at din kommune skal vedta støtte til FNs atomvåpenforbud? 
                                Finn noen som mener det samme (meld dere inn i Nei til Atomvåpen om dere ikke allerede er medlemmer) 
                            </p>
                            <ol>
                                <li id="cityFour">La et forslag til tekst. Se forslag under</li>
                                <li>Ta kontakt med noen politikere dere tror vil støtte forslaget.</li>
                                <li>Gi dem tekstforslag og jobb videre med dem om de vil.</li>
                                <li>Vis dere i lokalsamfunnet – stå på stand – skriv leserinnlegg</li>
                                <li>Inviter dere inn til lokalradio og andre steder som kan bidra til å påvirke.</li>
                                <li>Vær aktive rundt den tiden forslaget skal opp i kommunestyret.</li>
                            </ol>
                            <p className="ConP">
                                Lykke til i kampen mot atomvåpen!
                            </p>
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#byFire" className="cityPicture">
                        <img className="by" id="byFire" src="https://image.flaticon.com/icons/svg/2942/2942104.svg" />
                    </div>
                    <div data-aos="fade-down" data-aos-anchor="#cityFive" className="cityCard">
                        <h2>TILSLUTTEDE KOMMUNER:</h2>
                        <ul>
                                <li>Arendal</li>
                                <li>Aurskog-Høland</li>
                                <li id="cityFive">Bamble</li>
                                <li>Bergen</li>
                                <li>Bodø</li>
                                <li>Hammerfest</li>
                                <li >Horten</li>
                                <li>Karlsøy</li>
                                <li>Kristiansand</li>
                                <li>Kristiansund</li>
                                <li>Larvik</li>
                                <li>Levanger</li>
                                <li>Mo i Rana</li>
                                <li>Nesodden</li>
                                <li>Oslo</li>
                                <li>Sunndal</li>
                                <li>Tromsø</li>
                                <li>Trondheim</li>
                                <li>Ålesund</li>
                        </ul>
                    </div>

                </div>
            <Router history={history}>
            <NavLink to="/"  onClick={() => window.location.assign("/")}>
                <img className="homeButton" src="https://image.flaticon.com/icons/svg/709/709624.svg" title="Tilbake"/>
            </NavLink>
       </Router>
        </div>
    )
}
export default CitiesAppeal