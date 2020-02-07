import React from "react";

interface CardProps {
  click: () => void;
  title: string;
  image: string;
  sdate: string;
  edate: string;
  numEpisodes: string;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  let startDate = props.sdate;
  if (startDate !== null) {
    startDate = startDate.slice(0, 10);
  }

  let endDate = props.edate;
  if (endDate !== null) {
    endDate = endDate.slice(0, 10);
  }

  return (
    <div className="card">
      <img className="img" src={props.image} onClick={props.click} />
      <div className="cardinfo">
        <ul>
          <li className="title">Title: {props.title}</li>
          <li>Start Date: {startDate}</li>
          <li>End Date: {endDate}</li>
          <li>Episodes: {props.numEpisodes}</li>
        </ul>
      </div>
    </div>
  );
};
