import './Main.css';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import Techs from "../Techs/Techs";

function Main() {
  return (
    <>
    <Header/>

    <main className="main-page">
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
    </main>
    </>
  );
}

export default Main;
