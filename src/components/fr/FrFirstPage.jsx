import Boxes from "../Boxes";
import Sidebar from "../template/Sidebar";

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

export default function FrFirstPage(){
  return(
      <>
          <div className="page full-screen background home">
              <div className="shadow"></div>
              <div className="grid full">
                  {/* Side bar starts */}
                  <Sidebar ln="fr" placeholder={PlaceHolder}/>
                  <div className="page__content">
                      <h2 class="title">L'énergie du soleil</h2>
                      <div class="space-50"></div>
                      <Boxes props="fr"/>
                  </div>
              </div>
          </div>
      </>
  )
}
