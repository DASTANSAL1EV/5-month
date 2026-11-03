import './designerClothes.css';
import DesignerClothesCard from './ui/DesignerClothesCard';
import accessories from '../../img/elegant-woman-straw-hat-isolated 2.png';
import dresses from '../../img/vknivfu sdkvbjieurg kjvn 1.png';
import outerwear from '../../img/pexels-dima-valkov-6211616 (1) 2.svg';

const items = [
  {
    id: 1,
    img: accessories,
    title: 'Accessories',
    desc: 'Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.',
  },
  {
    id: 2,
    img: dresses,
    title: 'Dresses',
    desc: 'Explore a stunning range of designer dresses, including evening gowns and chic day dresses.',
  },
  {
    id: 3,
    img: outerwear,
    title: 'Outerwear',
    desc: 'Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.',
  },
];

export default function DesignerClothes() {
  return (
    <section className="designer_clothes">
      <h2 className="designer_clothes_title">Designer Clothes For You</h2>
      <p className="designer_clothes_subtitle">
        Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
      </p>

      <div className="designer_clothes_list">
        {items.map((item) => (
          <DesignerClothesCard
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
}