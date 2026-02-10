import S from "./card.module.scss"

const Card = ({ image, imageAlt, title, description, buttonText, onButtonClick }) => {
  return (
    <article className={S.CTA}>
      <img src={image} alt={imageAlt} />
      <h2 className={S.CTAtitle}>{title}</h2>
      <p className={S.CTAtext}>{description}</p>
      <button onClick={onButtonClick} className={S.CTAbtn}>{buttonText}</button>
    </article>
  );
}

export default Card;
