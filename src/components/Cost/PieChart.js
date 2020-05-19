import React from 'react'
import './NWCost.css'
import {PieChart} from 'react-minimal-pie-chart';

const Piechart = () => {

    const shiftSize = 7;

    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
        color: 'white'
      };

    return(
        <div data-aos="fade-left" data-aos-anchor="#costPie" className="PieChart">

        <PieChart 
        id="costPie"
        startAngle={-10}
        label={({dataEntry}) => dataEntry.value}
        labelStyle={{...defaultLabelStyle}}
        radius={PieChart.defaultProps.radius - shiftSize}
        radius={42}

        data={[
            {title: 'Frankrike', value: 4.8, color: "yellow" },
            {title: 'Kina', value: 10.4, color: "red" },
            {title: 'India', value: 2.3, color: "green" },
            {title: 'Israel', value: 1, color: "blue" },
            {title: 'Nord-Korea', value: 0.6, color: "peachpuff" },
            {title: 'Pakistan', value: 1, color: "#112233" },
            {title: 'Russland', value: 8.5, color: "#111111" },
            {title: 'Storbritannia', value: 8.9, color: "purple" },
            {title: 'USA', value: 35.4, color: "orange" },
        ]}
        />
        </div>
    )
}

export default Piechart