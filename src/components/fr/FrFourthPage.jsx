import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Tree from '../../assets/img/tree.png'

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

export default function FrFourthPage(){

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
                        
                        <div className="wrap">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h3 className='mb-3 vh3'>Il faudrait planter 25 491 arbres pour éliminer la même quantité de CO&#8322; de l’air en 10 ans.</h3>
                                    <p  class="m-0 p-0">Il faudrait planter 25 491 arbres pour éliminer la même quantité de CO2 de l’air mondial en 10 ans</p>
                                </div>
                                <div className="col-xs-12 col-sm-6 text-center">
                                    <img style={{width: "80%"}} src={Tree} alt="" />
                                </div>
                            </div>

                            <p className="box-note">100 m&sup2; de forêt, avec 80 arbres, éliminent environ une tonne de CO2 de l'air en un an</p>
                        </div>

                        <Copyright />
                            
                    </div>
                </div>
            </div>

        </div>
    </>
)
}