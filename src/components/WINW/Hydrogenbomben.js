import React from 'react'
import './HvaErNW.css'

const Hydrogenbomben = () => {

    return(
        <div data-aos="fade-right" data-aos-anchor="#hbomb" className="hydrogenbomben">
            <img data-aos="fade-right" data-aos-anchor="#hbomb" className="blueCrane" src=".//img/mini_blue.png" />
            <div className="WINWcard">
            <h2>Hydrogenbomben</h2>
                <p className="WINWp">Det som på folkemunne er kjent som en “hydrogenbombe”, eller en “termonukleær bombe”, 
                er faktisk tre atombomber som er integrert for å gi tilnærmet ubegrenset kraft. 
                En fisjonsbombe (uran eller plutonium) begrenses av fragmentering av eksplosjonen, slik at kjedereaksjonen bare finner sted i en del av materialet. 
                For å komme rundt dette “problemet” utformet supermaktene på 50-tallet et design der den eksplosive effekten ikke er begrenset på samme måte.
                </p>
                <p id="hbomb" className="WINWp">I denne bombetypen utløses først en plutoniumbombe basert på fisjon (spaltning). 
                Dette gir en temperatur på flere millioner grader og dermed utløses en fisjonsbombe hvor hydrogenatomer 
                (deuterium, tritium) smelter sammen til heliumatomer mens det samtidig frigjøres en storm av energirike nøytroner. 
                Disse nøytronene treffer en kapsel av U-238 (uranisotopen som ikke spaltes av termiske nøytroner) og energien av disse nøytronene er tilstrekkelig til å spalte U-238 kjerner, 
                som utvikler ytterligere energi. Den største delen av energiutviklingen ligger med andre ord i sprengningen av kapselen, 
                mens hydrogendelen kun tjener som en tennsats for dette.
                </p>
                <p className="WINWp">Fusjon skjer når lette kjerneelementer, som for eksempel hydrogenkjerner, smelter inn i tyngre grunnstoffer, 
                mens energi frigjøres. For at dette skal skje kreves det høye temperaturer og trykk. 
                I stjerner skjer kjernefysisk fusjon i stjernens indre, og det er dette som er deres kilde til energi.
                </p>
                <p className="WINWp">Av de atomvåpen som eksisterer i dag er de aller fleste hydrogenbomber. 
                I motsetning til fisjonsbomben kan en hydrogenbombe i utgangspunktet ha uendelig stor eksplosiv kraft. 
                Den største hydrogenbomben som har blitt prøvesprengt hadde en styrke på 58 megatonn (Mt), noe som tilsvarer ca. 4600 Hiroshima-bomber. 
                Prøvesprengningen fant sted i 1961 over Novaja Semlja i daværende Sovjetunionen.
                </p>
                
        </div>
        </div>
    )
}

export default Hydrogenbomben