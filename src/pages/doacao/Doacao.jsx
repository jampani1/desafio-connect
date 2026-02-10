import React from "react";
import S from "./doacao.module.scss"
import doacao1 from "../../assets/images/doacao1.png"
import doacao2 from "../../assets/images/doacao2.png"
import doacao3 from "../../assets/images/doacao3.png"
import Card from "../../components/Card/Card";

const cards = [
  { 
    image: doacao1, 
    imageAlt: "Pessoa carregando caixa com comidas",
    title: "Instituto grande familia", 
    description: "Contribua com alimentos não perecíveis e ajude familias em situação de vulnerabilidade", 
    buttonText: "Quero doar" 
  },
  { 
    image: doacao2, 
    imageAlt: "Livros organizados lado a lado verticalmente",
    title: "Projeto futuro na escola", 
    description: "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.", 
    buttonText: "Quero doar" 
  },
  { 
    image: doacao3, 
    imageAlt: "Pessoas fazendo manutenção em computadores",
    title: "Instituto conecta jovem", 
    description: "Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades", 
    buttonText: "Quero doar" 
  },
];
const Doacao = () => {
return (
    <section className={S.heroSection}>
      {/* titulo e hero ? */}
      <h1 className={S.title}>Doação</h1>
      <div className={S.CTAgroup}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Doacao;