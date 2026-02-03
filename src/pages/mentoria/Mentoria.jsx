import React from "react";
import S from "./mentoria.module.scss"
import mentoria1 from "../../assets/images/mentoria1.png"
import mentoria2 from "../../assets/images/mentoria2.png"
import mentoria3 from "../../assets/images/mentoria3.png"

const Mentoria = () => {
return (
    <section className={S.heroSection}>
      {/* titulo e hero ? */}
      <h1 className={S.title}>Mentoria</h1>
      <div className={S.CTAgroup}>
        <article className={S.CTA}>
          <img src={mentoria1} alt="Mãos sobre a mesa com papeis" />
          <h2 className={S.CTAtitle}>Mentoria de carreira e emprego</h2>
          <p className={S.CTAtext}>Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.</p>
          <button className={S.CTAbtn}>Quero participar</button>
        </article>
        <article className={S.CTA}>
          <img src={mentoria2} alt="Pessoas encarando um computador" />
          <h2 className={S.CTAtitle}>Compartilhe experiência</h2>
          <p className={S.CTAtext}>Oriente jovens e profissionais iniciantes em sua área.</p>
          <button className={S.CTAbtn}>Quero participar</button>
        </article>
        <article className={S.CTA}>
          <img src={mentoria3} alt="Duas pessoas conversando e olhando um computador" />
          <h2 className={S.CTAtitle}>Acompanhamento</h2>
          <p className={S.CTAtext}>Participe como guia em jornadas de aprendizado e desenvolvimento.</p>
          <button className={S.CTAbtn}>Quero participar</button>
        </article>
      </div>
    </section>
  );
}

export default Mentoria;