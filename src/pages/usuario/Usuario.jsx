import React from "react";
import S from "./usuario.module.scss"
import iconPlace from "../../assets/logos/place.png"
import iconMail from "../../assets/logos/mail.png"
import iconSince from "../../assets/logos/since.png"

export default function Usuario() {
  return (
    <section className={S.perfilSection}>
      <article className={S.card}>
        <img className={S.foto} src="https://avatars.githubusercontent.com/u/118212495?v=4" alt="" />
        <div className={S.info}>
          <h1>Vinicius Bispo</h1>
            <p className={S.status}>Voluntário Ativo</p>
            <p className={S.bio}>Apaixonado por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
              <div className={S.detalhes}>
                <img className={S.icon} src={iconPlace} alt="" />
                <p className={S.cidade}>Salvador, BA</p>
                <img className={S.icon} src={iconMail} alt="" />
                <p className={S.email}>vini.bispo@gmail.com</p>
                <img className={S.icon} src={iconSince} alt="" />
                <p className={S.since}>Membro desde Janeiro 2022</p>
              </div>
            <div className={S.tagsGroup}>
              <span className={S.tag}>Educação</span>
              <span className={S.tag}>Meio Ambiente</span>
              <span className={S.tag}>Assistência Social</span>
              <span className={S.tag}>Design</span>
            </div>
        </div>
      </article>
    </section>
  );
}