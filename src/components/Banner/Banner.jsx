import bannerImg from '../../img/MaskGroup.svg';
import './banner.css';

export default function Banner() {
  return (
    <section className="container banner_cont">
      <div className="desc">
        <h1>Discover and Find Your Own Fashion!</h1>
        <p>Explore our curated collection of stylish clothing and accessories tailored to your unique taste</p>
        <button className="bannerBtn">Explore Now</button>
      </div>
      <div className="banner_img">
        <img src={bannerImg} alt="" />
      </div>
    </section>
  )
}
