import React from 'react';
import Chart from 'react-apexcharts'
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import useApiData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyMonthChart"

export default function Seventh(){

        const chartOptions = {
            id: 'seventh-page',
            colors: ["#ffd800", "transparent"],
            width: '100%',
            enabled: false,
            name: 'Power output (Facq Zaventem showroom)',
        }

        const { data, loading, error } = useApiData(URL);
        const {options, series } = useChart(data, loading, chartOptions);

        return(
            <>
                <div className="page full-screen background">
                    <div className="shadow"></div>
                    <div className="grid">
                        <Sidebar title="" />
                        <div className="page__content">

                            <div className="box light">
                                <div className="box__header">
                                    <h2 className="title colored">Monthly overview</h2>
                                    <h3 className="sub-title">This building produces solar energy!</h3>
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