import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function RomanticTimeline() {
  const events = [
    { date: "26/01/2025", title: "Meu grude me seguiu no Insta", message: "" },
    { date: "16/01/2025", title: "Primeira vez que te vi", message: "O segundo que ficou para sempre ❤️" },
    { date: "21/02/2025", title: "Primeiro PG juntos", message: "" },
    { date: "05/03/2025", title: "Nosso primeiro jogo", message: "Fortaleza x Ferrim" },
    { date: "23/03/2025", title: "Nos Declaramos", message: "O dia em que nossos corações se uniram ❤️" },
    { date: "29/03/2025", title: "Primeiro Eu te amo", message: "" },
    { date: "30/03/2025", title: "Primeiro Beijo", message: "O momento mais mágico entre nós 💋" },
    { date: "09/04/2025", title: "Primeiro aniversário do meu grude", message: "" },
    { date: "09/04/2025", title: "Conheci meus sogros", message: "" },
    { date: "12/04/2025", title: "Primeiro dia fit", message: "" },
    { date: "12/04/2025", title: "Você conheceu seus sogros", message: "" },
    { date: "17/04/2025 a 20/04/2025", title: "Nosso primeiro acampamento", message: "" },
    { date: "10/05/2025", title: "Oficializamos nosso relacionamento", message: "Eu escolho te amar e superar todas as adversidades" },
  ];

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.date}
          iconStyle={{ background: "#ff99cc", color: "#fff" }}
          icon={<span style={{ fontSize: "24px", lineHeight: "48px" }}>❤️</span>}
          contentStyle={{ background: "#ffe6e6", color: "#a83232" }}
        >
          <h3>{event.title}</h3>
          <p>{event.message}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default RomanticTimeline;