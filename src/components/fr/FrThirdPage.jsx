import React, {useState, useEffect} from 'react';
import Product2 from '../template/Product2';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProductFR } from '../../data';
import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

export default function FrThirdPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProductFR())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar ln="fr" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Émissions de CO&#8322; évitées</h2>
                                <h3 className="sub-title">Ce bâtiment produit de l'énergie solaire !</h3>
                                <div className="line"></div>
                            </div>
                            <div className="box__content">

                                <div className="wrapper">
                                    <h3 className="vh3">Émissions de CO&#8322; évitées depuis le 30.11.2021 :<br></br>319 tonnes ; cela équivaut à :</h3>
                                    <div className="product-wrap" style={{alignItems: "flex-end"}}>
                                        {data.map( item => {
                                            return(
                                                <Product2 q={item.q} title={item.title} img={item.img} />
                                            )
                                        } )}
                                    </div>                                    
                                </div>
                                <Copyright />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}