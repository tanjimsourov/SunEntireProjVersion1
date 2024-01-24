import PlaceHolder from '../../assets/img/floating-img.jpg';
import ClockSVG from "../template/ClockSVG";

export default function Sidebar({ ln, placeholder, title }){
    let tag = "This building produces solar energy"
    if(ln === "fr"){
        tag = "Ce bâtiment produit de l'énergie solaire";
    }
    if(ln === "nl"){
        tag = "Dit gebouw produceert zonne-energie";
    }

    if( title ){
        tag = title;
    }

    return(
        <div className="page__sidebar">
            <div className="page__sidebar_header">
                <h2 class="clock-title bold">{tag}</h2>
            </div>
            <div className="page__sidebar_content">
                <ClockSVG />
            </div>
            <div className="page__sidebar_footer">
                <img src={placeholder ? placeholder : PlaceHolder } className='sidebar-float' alt="" />
            </div>
        </div>
    )
}