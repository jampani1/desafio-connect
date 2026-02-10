import React from "react";
import S from "./eventosep.module.scss"
import ep1 from "../../assets/images/ep1.png"
import ep2 from "../../assets/images/ep2.png"
import ep3 from "../../assets/images/ep3.png"
import Card from "../../components/Card/Card";

const cards = [
  { 
    image: ep1, 
    imageAlt: "Pessoas sentadas em circulo",
    title: "Emponderando jovens para o futuro", 
    description: "Atividade: palestra motivacional sobre liderança jovem e transformação social. Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.", 
    buttonText: "Quero participar" 
  },
  { 
    image: ep2, 
    imageAlt: "Homem explicando algo atras do computador",
    title: "Tecnologia que transforma", 
    description: "Atividade: workshop de introdução à programação e inovação digital. Impacto: preparar jovens para o mercado de trabalho através da tecnologia.", 
    buttonText: "Quero participar" 
  },
  { 
    image: ep3, 
    imageAlt: "Pessoas rindo",
    title: "Carreira e primeiro emprego", 
    description: "Atividade: palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado. Impacto: ajudar jovens a conquistar oportunidades de trabalho.", 
    buttonText: "Quero participar" 
  },
];

const EventosEP = () => {
return (
    <section className={S.heroSection}>
      {/* titulo e hero ? */}
      <h1 className={S.title}>Eventos & Palestras</h1>
      <div className={S.CTAgroup}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default EventosEP;