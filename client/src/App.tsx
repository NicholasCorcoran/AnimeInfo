import * as React from "react";
import "./App.css";
import { Card } from "./Components/AnimeCard/card";
import { searchTitle } from "./http";

searchTitle("Naruto").then(x => console.log(x[0]));

export const App: React.FC = () => {
  return (
    <div className="App">
      <Card image="" title="" sdate="" edate="" numEpisodes="" />
    </div>
  );
};
