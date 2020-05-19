import React from 'react'
import {Router, NavLink} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import './NWCost.css'
import PieChart from './PieChart';

const NWCost = () => {
    
    const history = createBrowserHistory();
    return(
        <div className="NWCost">
            <div className="fpCost">
                <h1 data-aos="fade-in" >Hva koster atomvåpen?</h1>
            </div>
                <img className="moneyPit" src="https://www.publicdomainpictures.net/pictures/170000/velka/dollars-background-1462001372fMM.jpg" alt="moneypit"></img>
                <div data-aos-anchor="#coins" className="CostTopp">
                    <img data-aos="fade-right" id="coins" src="https://image.flaticon.com/icons/png/512/2898/2898134.png" alt="coins"></img>
                    <h3 data-aos="fade-left">
                        Atomvåpenstatene brukte <span>$72.9 milliarder</span> på deres 13,000+ atomvåpen i 2019.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTopp">
                    <h3 data-aos="fade-right">
                        Fra 2018 til 2019 var det en økning på $7.1 milliarder i atomvåpenkostnader i følge en rapport fra <a href="https://d3n8a8pro7vhmx.cloudfront.net/ican/pages/1549/attachments/original/1589365383/ICAN-Enough-is-Enough-Global-Nuclear-Weapons-Spending-2020-published-13052020.pdf?1589365383"> ICAN.</a>
                    </h3>
                    <img data-aos="fade-left" id="coins" src="https://image.flaticon.com/icons/svg/2916/2916115.svg" alt="coins"></img>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        Frankrike har 290 atomvåpen som kan utskytes fra lufta og fra ubåter. De brukte $4.8 milliarder på atomvåpen i 2019.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        Kina har 320 atomvåpen og kan utskyte de fra land, fly og ubåter. I 2019 brukte de $10.4 milliarder på atomvåpen.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        India er estimert til å ha 150 atomvåpen som kan utskytes fra land, mest sansynlig lufta og de er i ferd med å utvikle muligheten å utskyte fra ubåter. De brukte $2.3 milliarder på atomvåpen i 2019.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        Israel er estimert til å ha 90 atomvåpen, som trolig er mulig å skytes ut fra land, vann og lufta. I 2019 brukte Israel $1 milliard på atomvåpen.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        Nord-Korea brukte $620 millioner på atomvåpen i 2019. De er estimert å ha ca. 35 atomvåpen.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        Pakistan er antatt å ha 160 atomvåpen som kan utskytes fra land og fra lufta. De utvikler muligheten for å kunne utskyte fra ubåter. Pakistan brukte $1 milliard på atomvåpen i 2019.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        Russland har 6,370 atomvåpen som kan utskytes fra land, vann og lufta. Russland brukte $8.5 milliarder på atomvåpen i 2019.
                    </h3>
                </div>
                <div data-aos-anchor="#coins" className="CostTop">
                    <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" alt="coins"></img>
                    <h3 data-aos="fade-right">
                        Storbritannia har 195 atomvåpen plassert på ubåter. De brukte $8.9 billioner på atomvåpen i 2019, 400 millioner mer enn Russland. 
                    </h3>
                </div>
                    <div data-aos-anchor="#coins" className="CostTop">
                        <img data-aos="fade-left" id="coins" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="coins"></img>
                        <h3 data-aos="fade-right">
                            USA har 5,800 atomvåpen som kan utskytes fra landbaserte missiler, ubåter og fra lufta. I 2019 brukte USA $35 milliarder på atomvåpen.
                        </h3>
                    </div>

        {/* <PieChart/> */}
            <Router history={history}>
            <NavLink to="/"  onClick={() => window.location.assign("/")}>
                <img className="homeButton" src="https://image.flaticon.com/icons/svg/709/709624.svg" title="Tilbake"/>
            </NavLink>
       </Router>
        </div>
    )
}
export default NWCost