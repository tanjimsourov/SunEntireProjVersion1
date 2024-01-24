import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";
import Fourth from "./components/pages/Fourth";
import Fifth from './components/pages/Fifth'
import Sixth from './components/pages/Sixth'
import Seventh from "./components/pages/Seventh";
import Eigth from "./components/pages/Eigth";
import Ninth from "./components/pages/Ninth"
import Tenth from "./components/pages/Tenth"
// fr
import FrFirstPage from "./components/fr/FrFirstPage";
import FrSecondPage from "./components/fr/FrSecondPage";
import FrThirdPage from "./components/fr/FrThirdPage";
import FrFourthPage from "./components/fr/FrFourthPage";
import FrFifthPage from "./components/fr/FrFifthPage";
import FrSixthPage from "./components/fr/FrSixthPage";
import FrEigth from "./components/fr/FrEigthPage";
import FrNinthPage from "./components/fr/FrNinthPage";
import FrTenthPage from "./components/fr/FrTenthPage";
// nl
import NlFirstPage from "./components/nl/NlFirstPage";
import NlSecondPage from "./components/nl/NlSecondPage";
import NlThirdPage from "./components/nl/NlThirdPage";
import NlFourthPage from "./components/nl/NlFourthPage";
import NlFifthPage from "./components/nl/NlFifthPage";
import NlSixthPage from "./components/nl/NlSixthPage";
import NlNinth from "./components/nl/NlNinthPage";
import FrSeventh from "./components/fr/FrSeventhPage";
import NlSeventh from "./components/nl/NlSeventhPage";
import NlEigth from "./components/nl/NlEightPage";
import NlTenthPage from "./components/nl/NlTenthPage";
import ElevenPage from "./components/pages/Eleven";
import FrElevenPage from "./components/fr/frElevenPage";
import NlElevenPage from "./components/nl/NlElevenPage";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<Fourth />} />
        <Route path="/fifth-page" element={<Fifth />} />
        <Route path="/sixth-page" element={<Sixth />} />
        <Route path="seventh-page" element={<Seventh />} />
        <Route path="eigth-page" element={<Eigth />} />
        <Route path="ninth-page" element={<Ninth />} />
        <Route path="tenth-page" element={<Tenth />} />
        <Route path="eleven-page" element={<ElevenPage />} />
        <Route path="/fr/" element={<FrFirstPage />} />
        <Route path="/fr/second-page" element={<FrSecondPage />} />
        <Route path="/fr/third-page" element={<FrThirdPage />} />
        <Route path="/fr/fourth-page" element={<FrFourthPage />} />
        <Route path="/fr/fifth-page" element={<FrFifthPage />} />
        <Route path="/fr/sixth-page" element={<FrSixthPage />} />
        <Route path="/fr/seventh-page" element={<FrSeventh />} />
        <Route path="/fr/eigth-page" element={<FrEigth />} />
        <Route path="/fr/ninth-page" element={<FrNinthPage />} />
        <Route path="/fr/tenth-page" element={<FrTenthPage />} />
        <Route path="/fr/eleven-page" element={<FrElevenPage />} />
        <Route path="/nl/" element={<NlFirstPage />} />
        <Route path="/nl/second-page" element={<NlSecondPage />} />
        <Route path="/nl/third-page" element={<NlThirdPage />} />
        <Route path="/nl/fourth-page" element={<NlFourthPage />} />
        <Route path="/nl/fifth-page" element={<NlFifthPage />} />
        <Route path="/nl/sixth-page" element={<NlSixthPage />} />
        <Route path="/nl/seventh-page" element={<NlSeventh />} />
        <Route path="/nl/eigth-page" element={<NlEigth />} />
        <Route path="/nl/ninth-page" element={<NlNinth />} />
        <Route path="/nl/tenth-page" element={<NlTenthPage />} />
        <Route path="/nl/eleven-page" element={<NlElevenPage />} />
      </Routes>
    </Router>
);
}

export default App;
