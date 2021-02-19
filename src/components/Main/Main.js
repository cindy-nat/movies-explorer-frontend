import './Main.css';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";

function Main() {
  return (
    <>
    <Header/>

    <main className="main-page">
      <Promo/>
      <NavTab/>
      <AboutProject/>
    </main>
    </>
  );
}

export default Main;
