import './selling.css';
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
        
        <div className="selling_img">
            <div className="product_card">
                <div className="img_box">
                    <img src={firstImg} alt="Regular Fit Long Sleeve Top" />
                </div>
                <h3>Regular Fit Long Sleeve Top</h3>
                <p className="price">$38.99 <span>|</span> ⭐ 5.0</p>
            </div>

            <div className="product_card">
                <div className="img_box">
                    <img src={secondImg} alt="Black Crop Tailored Jacket" />
                </div>
                <h3>Black Crop Tailored Jacket</h3>
                <p className="price">$62.99 <span>|</span> ⭐ 4.9</p>
            </div>

            <div className="product_card">
                <div className="img_box">
                    <img src={thirdImg} alt="Textured Sunset Shirt" />
                </div>
                <h3>Textured Sunset Shirt</h3>
                <p className="price">$49.99 <span>|</span> ⭐ 5.0</p>
            </div>
        </div>

        <button className="SelBtn">See all →</button>
    </section>
  )
}