import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Selling from "./components/Selling/Selling"
import './app.css';
import OurProducts from "./components/Ourproducts/OurProducts";
import ExclusiveOffer from "./components/ExclusiveOffer/ExclusiveOffer";

export default function App() {
  return (
    <div>
        <div className="top_container">
        <Header />
        <Banner />
        </div>
        <div className="sections">
        <Selling />
        <OurProducts/>
        <ExclusiveOffer/>
        </div>
    </div>
  )
}
