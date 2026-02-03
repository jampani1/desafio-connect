import React from "react";
import S from "./eventosep.module.scss"
import ep1 from "../../assets/images/ep1.png"
import ep2 from "../../assets/images/ep2.png"
import ep3 from "../../assets/images/ep3.png"

const EventosEP = () => {
return (
    <section className={S.heroSection}>
      {/* titulo e hero ? */}
      <h1 className={S.title}>Eventos & Palestras</h1>
      <div className={S.CTAgroup}>
        <article className={S.CTA}>
          <img src={ep1} alt="Pessoas sentadas em circulo" />
          <h2 className={S.CTAtitle}>Emponderando jovens para o futuro</h2>
          <p className={S.CTAtext}>Atividade: palestra motivacional sobre liderança jovem e transformação social.</p>
          <br />
          <p className={S.CTAtext}>Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.</p>
          <button className={S.CTAbtn}>Quero participar</button>
        </article>
        <article className={S.CTA}>
          <img src={ep2} alt="Homem explicando algo atras do computador" />
          <h2 className={S.CTAtitle}>Tecnologia que transforma</h2>
          <p className={S.CTAtext}>Atividade: workshop de introdução à programação e inovação digital.</p>
          <br />
          <p className={S.CTAtext}>Impacto: preparar jovens para o mercado de trabalho através da tecnologia.</p>
          <button className={S.CTAbtn}>Quero doar</button>
        </article>
        <article className={S.CTA}>
          <img src={ep3} alt="Pessoas rindo" />
          <h2 className={S.CTAtitle}>Carreira e primeiro emprego</h2>
          <p className={S.CTAtext}>Atividade: palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.</p>
          <br />
          <p className={S.CTAtext}>Impacto: ajudar jovens a conquistar oportunidades de trabalho.</p>
          <button className={S.CTAbtn}>Quero doar</button>
        </article>
      </div>
    </section>
  );
}

export default EventosEP;