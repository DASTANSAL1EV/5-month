import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Selling from "./components/Selling/Selling"
import './app.css';

export default function App() {
  return (
    <div>
        <div className="top_container">
        <Header />
        <Banner />
        </div>
        <div className="sections">
        <Selling />
        </div>
    </div>
  )
}
