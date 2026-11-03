export default function DesignerClothesCard({ img, title, desc }) {
    return (
      <div className="designer_card">
        <img className="designer_card_img" src={img} alt={title} />
        <h3 className="designer_card_title">{title}</h3>
        <p className="designer_card_desc">{desc}</p>
      </div>
    );
  }