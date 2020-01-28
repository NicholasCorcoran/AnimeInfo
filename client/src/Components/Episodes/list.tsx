import React from "react";

interface ListProps {
  episode_id: any;
  title: any;
  aired: any;
  filler: any;
}

export const List: React.FC<ListProps> = (props: ListProps) => {
  return (
    
    <div className="card">
      <div className="cardinfo">
        <ul>
          <li>Ep. Number: {props.episode_id}</li>
          <li>Title: {props.title}</li>
          <li>Aired: {props.aired}</li>
          <li>Filler: {props.filler}</li>
        </ul>
      </div>
    </div>
  );
};
