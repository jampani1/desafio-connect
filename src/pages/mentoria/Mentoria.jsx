import React from "react";
import { useState, useEffect } from "react";
import S from "./mentoria.module.scss"
import mentoria1 from "../../assets/images/mentoria1.png"
import mentoria2 from "../../assets/images/mentoria2.png"
import mentoria3 from "../../assets/images/mentoria3.png"

export default function Mentoria() {
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
  // Esse código roda quando modalAberto muda
  if (modalAberto) {
    // Se o modal está aberto, cria um timer de 10 segundos
    const timer = setTimeout(() => {
      setModalAberto(false);  // fecha o modal
    }, 10000);  // 10000ms = 10 segundos
    // "Limpeza" - cancela o timer se o componente sumir
    return () => clearTimeout(timer);
  }
  }, [modalAberto]);  // ← roda quando modalAberto mudar

    return (
      <>
        <section className={S.heroSection}>
          {/* titulo e hero ? */}
          <h1 className={S.title}>Mentoria</h1>
          <div className={S.CTAgroup}>
            <article className={S.CTA}>
              <img src={mentoria1} alt="Mãos sobre a mesa com papeis" />
              <h2 className={S.CTAtitle}>Mentoria de carreira e emprego</h2>
              <p className={S.CTAtext}>Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.</p>
              <button onClick={() => setModalAberto(true)} className={S.CTAbtn}>Quero participar</button>
            </article>
            <article className={S.CTA}>
              <img src={mentoria2} alt="Pessoas encarando um computador" />
              <h2 className={S.CTAtitle}>Compartilhe experiência</h2>
              <p className={S.CTAtext}>Oriente jovens e profissionais iniciantes em sua área.</p>
              <button onClick={() => setModalAberto(true)} className={S.CTAbtn}>Quero participar</button>
            </article>
            <article className={S.CTA}>
              <img src={mentoria3} alt="Duas pessoas conversando e olhando um computador" />
              <h2 className={S.CTAtitle}>Acompanhamento</h2>
              <p className={S.CTAtext}>Participe como guia em jornadas de aprendizado e desenvolvimento.</p>
              <button onClick={() => setModalAberto(true)} className={S.CTAbtn}>Quero participar</button>
            </article>
          </div>
        </section>
          {modalAberto && (
            <div className={S.modal}>
              <div className={S.checkIcon}>✓</div>
              <p>Inscrito com sucesso!</p>
              <div className={S.progressBar}></div>
            </div>
          )}
      </>
    );
}