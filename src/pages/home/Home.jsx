import React from "react";
import S from "./home.module.scss"
import ImagemPrincipal from "../../assets/images/imgPrincipal.png";
import seta from "../../assets/logos/seta_direita.png";

const Home = () => {
return (
    <section className={S.heroSection}>
      <div className={S.heroContent}>
        <h1 className={S.heroTitle}>Projetos sociais que transformam</h1>
        <p className={S.heroText}>
          Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.
        </p>
        <button className={S.heroBtn}>Cadastrar empresa <img src={seta} alt="" /></button>
        <div className={S.stats}>
          <article className={S.statItem}>
            <h3>500+</h3>
            <p>Empresas voluntárias</p>
          </article>
          
          <article className={S.statItem}>
            <h3>1.2k+</h3>
            <p>Projetos realizados</p>
          </article>

          <article className={S.statItem}>
            <h3>50k+</h3>
            <p>Vidas impactadas</p>
          </article>
        </div>
      </div>
      <div className={S.heroImage}>
        <img src={ImagemPrincipal} alt="Mãos segurando bonecos dando as mãos ao redor da Terra" />
      </div>
    </section>
  );
}  

export default Home;