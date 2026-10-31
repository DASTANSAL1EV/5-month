import './selling.css';
import SellingCard from './ui/SellingCard';
import firstImg from '../../img/pexels-dima-valkov-6211621 1.svg';
import secondImg from '../../img/pexels-dima-valkov-6211616 (1) 2.svg';
import thirdImg from '../../img/pexels-dima-valkov-6503007 3.svg';

export default function Selling() {
  return (
    <section className="selling_cont container">
        <div className="inscriptions">
            <h1>Best Selling</h1>
            <p>Get in on the trend with our curated selection of best-selling styles.</p>
        </div>
        
        <div className="selling_cards">
            <SellingCard bg="#224F34" img={firstImg} title='Regular Fit Long Sleeve Top' price='62.99' rating='5.0' />
            <SellingCard bg="#224F25" img={secondImg} title='Black Crop Tailored Jacket' price='38.99' rating='4.9'/>
            <SellingCard bg="#224F15" img={thirdImg} title='Textured Sunset Shirt' price='49.99' rating='5.0'/>
        </div>

        <button className="SelBtn">See all →</button>
    </section>
  )
}