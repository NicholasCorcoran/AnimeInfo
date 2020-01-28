import React from "react";

interface ListProps {
  episode_id: string;
  title: string;
  aired: string;
  filler: boolean;
}

export const List: React.FC<ListProps> = (props: ListProps) => {
  return (
    <div className="list">
      <div className="listinfo">
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
