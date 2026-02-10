import React from "react";
import { useState, useEffect } from "react";
import S from "./mentoria.module.scss"
import mentoria1 from "../../assets/images/mentoria1.png"
import mentoria2 from "../../assets/images/mentoria2.png"
import mentoria3 from "../../assets/images/mentoria3.png"
import Card from "../../components/Card/Card";

export default function Mentoria() {

  const [modalAberto, setModalAberto] = useState(false);

  const cards = [
  { 
    image: mentoria1, 
    imageAlt: "Mãos sobre a mesa com papeis",
    title: "Mentoria de carreira e emprego", 
    description: "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.", 
    buttonText: "Quero participar",
    onButtonClick: () => setModalAberto(true)
  },
  { 
    image: mentoria2, 
    imageAlt: "Pessoas encarando um computador",
    title: "Compartilhe experiência", 
    description: "Oriente jovens e profissionais iniciantes em sua área.", 
    buttonText: "Quero participar",
    onButtonClick: () => setModalAberto(true)
  },
  { 
    image: mentoria3, 
    imageAlt: "Duas pessoas conversando e olhando um computador",
    title: "Acompanhamento", 
    description: "Participe como guia em jornadas de aprendizado e desenvolvimento.", 
    buttonText: "Quero participar",
    onButtonClick: () => setModalAberto(true)
  },
];

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
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
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