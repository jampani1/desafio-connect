import React from "react";
import S from "./doacao.module.scss"
import doacao1 from "../../assets/images/doacao1.png"
import doacao2 from "../../assets/images/doacao2.png"
import doacao3 from "../../assets/images/doacao3.png"

const Doacao = () => {
return (
    <section className={S.heroSection}>
      {/* titulo e hero ? */}
      <h1 className={S.title}>Doação</h1>
      <div className={S.CTAgroup}>
        <article className={S.CTA}>
          <img src={doacao1} alt="Pessoa carregando caixa com comidas" />
          <h2 className={S.CTAtitle}>Instituto grande familia</h2>
          <p className={S.CTAtext}>Contribua com alimentos não perecíveis e ajude familias em situação de vulnerabilidade</p>
          <button className={S.CTAbtn}>Quero doar</button>
        </article>
        <article className={S.CTA}>
          <img src={doacao2} alt="Livros organizados lado a lado verticalmente" />
          <h2 className={S.CTAtitle}>Projeto futuro na escola</h2>
          <p className={S.CTAtext}>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>
          <button className={S.CTAbtn}>Quero doar</button>
        </article>
        <article className={S.CTA}>
          <img src={doacao3} alt="Pessoas fazendo manutenção em computadores" />
          <h2 className={S.CTAtitle}>Instituto conecta jovem</h2>
          <p className={S.CTAtext}>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades</p>
          <button className={S.CTAbtn}>Quero doar</button>
        </article>
      </div>
    </section>
  );
}

export default Doacao;