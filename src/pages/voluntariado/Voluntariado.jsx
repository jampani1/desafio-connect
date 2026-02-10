import React from "react";
import S from "./voluntariado.module.scss"
import voluntariado1 from "../../assets/images/voluntariado1.png"
import voluntariado2 from "../../assets/images/voluntariado2.png"
import voluntariado3 from "../../assets/images/voluntariado3.png"
import Card from "../../components/Card/Card";

const cards = [
  { 
    image: voluntariado1, 
    imageAlt: "Caixas de reciclado",
    title: "Multirão de reciclagem", 
    description: "Coletar materiais recicláveis e orientar sobre descarte consciente.", 
    buttonText: "Quero participar" 
  },
  { 
    image: voluntariado2, 
    imageAlt: "Pessoas em frente aos computadores",
    title: "Aulas de tecnologia", 
    description: "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.", 
    buttonText: "Quero participar" 
  },
  { 
    image: voluntariado3, 
    imageAlt: "Pessoas em roda",
    title: "Esporte e inclusão", 
    description: "Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.", 
    buttonText: "Quero participar" 
  },
];


const Voluntariado = () => {
return (
    <section className={S.heroSection}>
      {/* titulo e hero ? */}
      <h1 className={S.title}>Voluntariado</h1>
      <div className={S.CTAgroup}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Voluntariado;