import './ourproducts.css';
import OurProductCard from './OurProductsCard';

export default function OurProducts() {
  return (
    <section className='container product_container'>
        <h2>Our products</h2>

        <div className='products'>
            <OurProductCard/>
            <OurProductCard/>
            <OurProductCard/>
            <OurProductCard/>
            <OurProductCard/>
            <OurProductCard/>
            <OurProductCard/>
            <OurProductCard/>
        </div>
    </section>
  )
}
