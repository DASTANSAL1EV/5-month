import product1 from '../../img/pexels-dima-valkov-6211621 1.svg'

export default function OurProductsCard() {
  return (
                <div className="product_card">
                    <div className="product_img" style={{ backgroundColor: "#D9D9D9" }}>
                        <img src={product1} alt="product1" />
                    </div>
                    <h3 className='description'>Spread Collar Shirt</h3>
                    <div className="selling_info">
                        <span className="price">$48.99</span>
                        <span className="line">|</span>
                        <span className="rating">5.0 <span className="star">★</span></span>
                    </div>
                </div>
  )
}
