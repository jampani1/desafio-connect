import React from "react";
import S from "./voluntariado.module.scss"
import voluntariado1 from "../../assets/images/voluntariado1.png"
import voluntariado2 from "../../assets/images/voluntariado2.png"
import voluntariado3 from "../../assets/images/voluntariado3.png"

const Voluntariado = () => {
return (
    <section className={S.heroSection}>
      {/* titulo e hero ? */}
      <h1 className={S.title}>Voluntariado</h1>
      <div className={S.CTAgroup}>
        <article className={S.CTA}>
          <img src={voluntariado1} alt="Caixas de reciclado" />
          <h2 className={S.CTAtitle}>Multirão de reciclagem</h2>
          <p className={S.CTAtext}>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>
          <button className={S.CTAbtn}>Quero participar</button>
        </article>
        <article className={S.CTA}>
          <img src={voluntariado2} alt="Pessoas em frente aos computadores" />
          <h2 className={S.CTAtitle}>Aulas de tecnologia</h2>
          <p className={S.CTAtext}>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>
          <button className={S.CTAbtn}>Quero participar</button>
        </article>
        <article className={S.CTA}>
          <img src={voluntariado3} alt="Pessoas em roda" />
          <h2 className={S.CTAtitle}>Esporte e inclusão</h2>
          <p className={S.CTAtext}>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>
          <button className={S.CTAbtn}>Quero participar</button>
        </article>
      </div>
    </section>
  );
}

export default Voluntariado;