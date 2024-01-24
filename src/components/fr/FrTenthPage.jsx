import React from 'react';
import Sidebar from '../template/Sidebar';
import Copyright from '../template/Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';
import { faWind, faDroplet, faCloudRain, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';


export default function FrTenthPage(){
    return(
        <>
            <div className="page full-screen background bg2">
                <div className="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Prévisions météorologiques</h2>
                                <div className="line"></div>
                            </div>
                            
                            <div className="wrap flex align-center">

                                <div className="row">
                                    <div className="col-xs-12 col-sm-4">
                                        <div className="whether text-center">
                                            <p className="wh-sub-title">Aujourd'hui</p>
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 512 512"><path d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z"/></svg>
                                            </div>
                                            <h1 className="temp">0 | 18C</h1>
                                            <div className="whether-details">
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faWind} />
                                                        </div>
                                                        <div className="data">
                                                            <p>3-4 m/s</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faDroplet} />
                                                        </div>
                                                        <div className="data">
                                                            <p>2mm</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faCloudRain} />
                                                        </div>
                                                        <div className="data">
                                                            <p>73%</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                    <div className="whether text-center">
                                            <p className="wh-sub-title">Demain</p>
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 512 512"><path d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z"/></svg>
                                            </div>
                                            <h1 className="temp">0 | 18C</h1>
                                            <div className="whether-details">
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faWind} />
                                                        </div>
                                                        <div className="data">
                                                            <p>3-4 m/s</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faDroplet} />
                                                        </div>
                                                        <div className="data">
                                                            <p>2mm</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faCloudRain} />
                                                        </div>
                                                        <div className="data">
                                                            <p>73%</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                    <div className="whether text-center">
                                            <p className="wh-sub-title">Après-demain</p>
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 0 512 512"><path d="M0 224c0 53 43 96 96 96h47.2L290 202.5c17.6-14.1 42.6-14 60.2 .2s22.8 38.6 12.8 58.8L333.7 320H352h64c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224zm330.1 3.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7h70.1L177.7 488.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7H281.9l52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z"/></svg>
                                            </div>
                                            <h1 className="temp">0 | 18C</h1>
                                            <div className="whether-details">
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faWind} />
                                                        </div>
                                                        <div className="data">
                                                            <p>3-4 m/s</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faDroplet} />
                                                        </div>
                                                        <div className="data">
                                                            <p>2 mm</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <FontAwesomeIcon icon={faCloudRain} />
                                                        </div>
                                                        <div className="data">
                                                            <p>73%</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                

                                
                            </div>
                            <Copyright />
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}