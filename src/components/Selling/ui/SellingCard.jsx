
export default function SellingCard({img, title, price, rating, bg}) {
  return (
     <div className="product_card">
                    <div className="img_box" style={{backgroundColor: bg}}>
                        <img src={img} alt="selling1" />
                    </div>
                    <h3>{title}</h3>
                    <div className="selling_info">
                        <span className="price">${price}</span>
                        <span className="line">|</span>
                        <span className="rating">{rating}<span className="star">★</span></span>
                    </div>
                </div>
  )
}
