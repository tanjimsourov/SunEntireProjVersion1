import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Chart from 'react-apexcharts'
import useApiData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';

import PlaceHolder from  '../../assets/img/fr/fr-floating.jpeg'

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyMonthWiseChart"

export default function FrEigth(){

    const chartOptions = {
        id: 'eight-page',
        colors: ["#ffd800", "transparent"],
        width: '100%',
        enabled: false,
        name: 'Puissance de sortie (Facq Zaventem showroom)',
    }

    const { data, loading, error } = useApiData(URL);
    const {options, series } = useChart(data, loading, chartOptions);

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Aperçu annuel</h2>
                                <h3 className="sub-title">Ce bâtiment produit de l'énergie solaire !</h3>
                                <div className="line"></div>
                            </div>
                            
                            <div className="wrap align-center">

                                {!loading && <Chart options={options} series={series} type="bar" width={"100%"} height={'320'} /> }  

                                <Copyright />  

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}