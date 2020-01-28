import React from "react";

interface CardProps {
  title: string;
  image: string;
  sdate: string;
  edate: string;
  numEpisodes: string;
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={props.image} />
        <div className="cardinfo">
          <ul>
            <li>Title: {props.title}</li>
            <li>Start Date: {props.sdate}</li>
            <li>End Date: {props.edate}</li>
            <li>Episodes: {props.numEpisodes}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
