import React from "react";
import { tsPropertySignature } from "@babel/types";

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

// import React from "react";

// interface CardProps {
//   title: string;
//   image: string;
//   sdate: string;
//   edate: string;
//   numEpisodes: string;
// }

// export const Card: React.FC<CardProps> = (props: CardProps) => {
//   return (
//     <div className="card">
//       <img src={props.image} />
//       <div className="cardinfo">
//         <ul>
//           <li>Title: {props.title}</li>
//           <li>Start Date: {props.sdate}</li>
//           <li>End Date: {props.edate}</li>
//           <li>Episodes: {props.numEpisodes}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
