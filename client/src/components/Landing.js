import React from "react";

import Card from "./Card";

const text = {
  importante:
    "Está diretamente relacionada às atividades que nós realizamos e que são relevantes em nossas vidas. Que trazem resultados em curto, médio ou longo prazo. Em geral, as coisas importantes têm prazos de execução, porém nunca são urgentes. As atividades importantes proporcionam prazer ao serem executadas, sendo que a maioria delas é espontânea.",
  urgente:
    "Esta esfera abrange todas as atividades para as quais o tempo está curto, no limite ou já se esgotou. São as exigências que chegam em cima da hora e que não podem ser previstas. Em geral, acabam trazendo pressão e estresse.",
  circunstancial:
    "Diz respeito às atividades desnecessárias, por serem consideradas apropriadas pela sociedade, excessivas ou sem resultados. São os gastos inúteis de tempo, como as horas a mais na cama, checar várias vezes por dia as redes sociais e demais atividades feitas por comodidade. Elas não trazem resultados e há alto potencial para gerar apenas frustrações.",
};

export default () => {
  return (
    <div>
      <h5>Esfera da Importância</h5>
      <p>{text.importante}</p>
      <h5>Esfera da Urgência</h5>
      <p>{text.urgente}</p>
      <h5>Esfera Circunstancial</h5>
      <p>{text.circunstancial}</p>
    </div>
  );
};
