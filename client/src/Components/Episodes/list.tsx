import React from "react";

interface ListProps {
  episode_id: any;
  title: any;
  aired: string;
  filler: any;
}

export const List: React.FC<ListProps> = (props: ListProps) => {
  let airedDate = props.aired;
  if (airedDate !== null) {
    airedDate = airedDate.slice(0, 10);
  }

  return (
    <div className="info-wrapper">
      <div className="info">
        <ul>
          <li>Ep. Number: {props.episode_id}</li>
          <li>Title: {props.title}</li>
          <li>Aired: {airedDate}</li>
          <li>Filler: {props.filler}</li>
        </ul>
      </div>
    </div>
  );
};
