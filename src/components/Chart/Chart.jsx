import React from 'react'
import { Line, Bar } from "react-chartjs-2";

import styles from './Chart.module.css'
const Chart = ({ data: { TotalConfirmed, TotalDeaths, TotalRecovered}, daily, country }) => {

    
    const barChart = (
        TotalConfirmed ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets:[
                        {
                            label:'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(54, 212, 193, 0.75)', 'rgba(255, 0, 0, 0.5)'],
                            data: [TotalConfirmed, TotalRecovered, TotalDeaths],
                        },
                    ],
                }}
                options={{
                    legend: {display: false},
                    title: {display: true, text: 'Current state in the world'},
                }}
            />
        ) : null
    );

    const lineChart = (
        daily[0] ? (
            <Line 
                data={{
                    labels: daily.map(({date}) => new Date(date).toDateString()),
                    datasets: [{
                        data: daily.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    },{
                        data: daily.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'Red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },{
                        data: daily.map((data) => data.active),
                        label: 'Active Cases',
                        borderColor: 'Yellow',
                        backgroundColor: 'rgba(255, 255, 0, 0.5)',
                        fill: true,
                    }],
                }}
            />
        ) : null
    ) 

    return (
        <div className={styles.container}>
           {country ? lineChart: barChart}
        </div>
    )
}

export default Chart

