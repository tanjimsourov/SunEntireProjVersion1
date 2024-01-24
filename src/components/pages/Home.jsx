import Boxes from "../Boxes";
import Sidebar from "../template/Sidebar";

export default function Home(){
    return(
        <>
            <div className="page full-screen background home">
                <div className="shadow"></div>
                <div className="grid full">
                    {/* Side bar starts */}
                    <Sidebar />
                    <div className="page__content">
                        <h2 class="title">Energy from sunlight</h2>
                        <div class="space-50"></div>
                        <Boxes props="en"/>
                    </div>
                </div>
            </div>
        </>
    )
}