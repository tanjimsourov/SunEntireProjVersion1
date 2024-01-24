import React from 'react';
import Chart from 'react-apexcharts'
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import useApiData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyMonthChart"

export default function NlSeventh(){

    const chartOptions = {
        id: 'seventh-page',
        colors: ["#ffd800", "transparent"],
        width: '100%',
        enabled: false,
        name: 'Uitgangsvermogen (Facq Zaventem showroom)',
    }

    const { data, loading, error } = useApiData(URL);
    const {options, series } = useChart(data, loading, chartOptions);

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="nl" placeholder={PlaceHolder}/>
                    <div className="page__content">

                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Maandoverzicht</h2>
                                <h3 className="sub-title">Dit gebouw produceert zonne-energie!</h3>
                                <div className="line"></div>                                    
                            </div>
                            <div className="wrap align-center">

                            {!loading && <Chart options={options} series={series} type="bar" width={"100%"} height={'320'} /> }  

                            </div>
                            <Copyright />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )

}