import React from 'react'
import {Router, NavLink} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import './Climate.css'

const Climate = () => {
    
    const history = createBrowserHistory(); 
    return(
        <div className="Climate">
            <h1>Atomvåpen og klima</h1>
            <img className="bamboo" src="https://www.publicdomainpictures.net/pictures/310000/velka/brown-bamboo-background-1568646552G7F.jpg" alt="bambus"/>
           <div data-aos="fade-up" data-aos="fade-down" data-aos-anchor="#klimatopp" className="climateTop">
                <h3 id="klimatopp">
                    Dersom atomvåpen benyttes i dag kan det utløse klimaendringer som vil ha svært negative konsekvenser for miljø, mennesker og dyr. 
                    En slik detonasjon vil løfte mange tonn med sot og støv høyt opp i atmosfæren hvor det vil danne et støvlag i flere år. 
                    Dette vil senke temperaturen på jordens overflate hvilket vil medføre utbredt matmangel.
                </h3>
            </div>
            <div id="byFire" className="earthPicture">
                        <img data-aos="fade-up"  data-aos-anchor="#byFire" className="by" src="https://image.flaticon.com/icons/svg/814/814587.svg" alt="earth" />
                        <img data-aos="fade-down"  data-aos-anchor="#byFire" className="by" src="https://image.flaticon.com/icons/svg/814/814587.svg" alt="earth" />
                        <img data-aos="fade-up"  data-aos-anchor="#byFire" className="by" src="https://image.flaticon.com/icons/svg/814/814587.svg" alt="earth" />
                    </div>
            <div className="climateBody">
            <div data-aos="fade-up" data-aos-anchor="#klima" className="klimaCard">
                <h2>Klimaeffekter ved en større atomkrig</h2>
                    <p id="klima" className="ConP">
                        Enhver bruk av atomvåpen i krig, som i Hiroshima og Nagasaki (1945), medfører primære og sekundære effekter. 
                        Primæreffekter dreier seg om varmestrålingen, branner, eksplosjoner og radioaktivitet som virker lokalt der bomben detoneres. 
                        Sekundæreffekter dreier seg om mer langvarige virkninger som radioaktiv forurensing, flyktningestrømmer, 
                        epidemier og sosial konflikt som virker utover detonasjonsstedet. 
                        På 1980-tallet innså man effektene en atomvåpenkrig vil ha på klimaet og hvordan dette vil kunne påvirke mennesker globalt ved hungersnød.
                    </p>
                    <p className="ConP">
                        En atomkrig vil ha en omfattende innvirkning på klimaet som følge av brannene som oppstår ved detonasjonen av et våpen. 
                        Når en atombombe detonerer over en større by igangsettes det store branner i et stort område. 
                        Brannene oppstår samtidig og vil i mange tilfeller danne en sammenhengende brennende overflate. 
                        Fra denne overflaten stiger det med stor hastighet opp varm luft. I de fleste tilfeller kan man forvente en ildstorm. 
                    </p>
                    <p className="ConP">
                        Med ”ildstorm” menes det at brannen skaper sin egen vind, sin egen storm. Luft dras med orkanstyrke inn mot detonasjonsstedet, 
                        varmes av brannene og stiger opp. Det blir mangel på oksygen og de menneskene som muligens kunne ha overlevd i tilfluktsrom vil bli kvalt.
                    </p>
                    <p className="ConP">
                        Ved slike branner dannes det en stor mengde svart sot, først og fremst fra brennende lagre med fossilt brensel og fra brennende asfalt. 
                        Selv vanlig organisk materiale, for eksempel trær, kan danne svart sot når brannen skjer ved mangel på oksygen. 
                        Sotet blir ført med den varme luften og danner svarte skyer.
                    </p>
                    <p className="ConP">
                        I 1982 presenterte den kjente klimaforskeren og Nobelprisvinneren Paul Crutzen sine studier av effekten på klimaet en atomkrig mellom 
                        USA og Sovjetunionen ville ha i henhold til mengden sort sot som ville føres opp i atmosfæren.              
                    </p>
                    <p className="ConP">
                        Crutzen og andre forskere på området konkluderte med at det svarte sotet ville påvirke jordas klima alvorlig. 
                        Et temperaturfall på 7-10 grader og store forandringer i nedbør vil gjøre det meste av matproduksjon på jorden umulig. 
                        Det vil bli en “atomvinter” uten sommer og derfor uten avlinger. Effektene forventes å avta og forsvinne etter noen år.    
                    </p>
                    <p className="ConP">
                        Resultatet av en atomvåpenkrig mellom Sovjet og USA innebærer at alle mennesker på jorden vil kunne rammes av sult, forgiftning og kulde. 
                        Større deler av menneskeheten vil omkomme, i hvertfall på den nordlige halvkule. 
                    </p>
                    <p className="ConP">
                        ”Seierherren” i en atomvåpenduell mellom USA og Sovjetunionen, altså den som ødelegger den andre partens atomvåpen før de blir avfyrt vil selv dø av hungersnød. 
                        Å angripe med atomvåpen er således et selvmord.
                    </p>
                    <p className="ConP">
                        Mange ledende politikere og militære nektet til å begynne med å tro på disse spådommene. 
                        Det er imidlertid bemerkelsesverdig at Sovjetunionens nye leder fra 1985 
                        Gorbatsjov ved flere anledninger har bekreftet at kunnskapen om en atomvinter gjorde dypt inntrykk på ham. 
                        Gorbatsjov lyktes, i samarbeid med sin amerikanske motpart president Reagan, i å få atomvåpenkappløpet mellom USA og Sovjet under 
                        kontroll gjennom en serie nedrustningsavtaler.
                    </p>
            </div>
            <div data-aos="fade-up" data-aos-anchor="#klimaEn" className="klimaCard">
                <h2>Klimaeffekter ved en regional atomvåpenkrig</h2>
                    <p id="klimaEn" className="ConP">
                        I oktober 2019 publiserte <a href="https://advances.sciencemag.org/content/5/10/eaay5478">Science Advances</a> en studie om klimaeffektene ved en 
                        regional atomkrig mellom Pakistan og India. Studiet tar for seg et scenario der Pakistan bruker 150 atomvåpen og India bruker 100 atomvåpen mot byer. 
                        I tillegg bruker begge partene til sammen 85 atomvåpen som detoneres i rurale strøk.
                    </p>
                    <p className="ConP">
                        I løpet av en uke vil dette medføre:
                        Opptil 125 millioner dødsfall, altså 2.5 ganger så mange mennesker som døde i 2. verdenskrig.
                        Røyk fra flammene vil medføre omfattende klimaendringer. Mengden sol vil reduseres med 20 til 30 prosent og temperaturer vil følgelig reduseres med 4 til 8˚C.
                        Fuktighet vil reduseres med 15 til 30 prosent globalt med alvorlige regionale variasjoner. Mens midtvesten og nordøstlige deler av USA ville mistet omtrent 50 prosent av sitt regnfall, ville regn praktisk talt ikke forekomme i India og Sentral-Kina.
                        Det vil ta mer enn 10 år før temperaturer og fuktighet returnerer til normalen.
                    </p>
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
export default Climate