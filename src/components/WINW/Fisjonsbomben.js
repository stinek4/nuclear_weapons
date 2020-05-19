import React from 'react'
import './HvaErNW.css'

const Fisjonsbomben = () => {

    return(
        <div data-aos="fade-right" data-aos-anchor="#fbomb" className="fisjonsbomben">
            <img data-aos="fade-right" data-aos-anchor="#fbomb" className="blueCrane" src="/img/mini_blue.png" />
           <div className="WINWcard">
           <h2>Fisjonsbomben</h2>
                <p className="WINWp">Fisjonsbomben er den enklere, og mindre kraftige, typen av de to atomvåpnene. 
                    I fisjonsbomben frigjøres energi ved spaltning av atomkjerner. 
                    Tunge atomkjerner kan splittes hvis de blir truffet av nøytroner. 
                    Ved splittingen frigjøres nye nøytroner som spalter nye atomkjerner og det skapes en kjedereaksjon. 
                    Fisjonsbomben er oppbygd for å starte en kjedereaksjon der så mye energi som mulig frigjøres, 
                    så raskt som mulig.  Jo lengre tid en kjedereaksjon varer, desto mer energi blir utviklet. 
                    For at dette skal fungere kreves det en viss størrelse på ladningen, 
                    ellers slipper for mange nøytroner ut og kjedereaksjon stopper opp. 
                    Denne størrelsen kalles “kritisk masse”; for uran er denne ca. 25 kg og for plutonium er denne ca. 6 kg. 
                    Kjedereaksjonen startes ved at konvensjonelt sprengstoff plutselig komprimerer det kjernefysiske materialet.
                </p>
                <p id="fbomb" className="WINWp">Stoffene som brukes i en fisjonsbombe er uran-235 og plutonium-239. 
                    Disse stoffene har den egenskapen at de spaltes ved forholdsvis langsomme nøytroner, såkalte “termiske nøytroner”. 
                    Produktene av spalteprosessen vil være en rekke ulike stoffer, mange av dem radioaktive isotoper av krypton, barium, 
                    jod-131, cesium og strontium.
                </p>
                <p className="WINWp">Bombene sluppet over Hiroshima og Nagasaki i Japan i 1945 var av typen fisjonsbomber. 
                    Hiroshima-bomben, “Little Boy”, var bygget på uran og hadde en sprengkraft tilsvarende ca. 15 tusen tonn TNT. 
                    Bomben over Nagasaki, “Fat Man”, var basert på plutonium med en sprengkraft tilsvarende om lag 23 tusen tonn TNT.
                </p>
                </div>
        </div>
    )
}

export default Fisjonsbomben