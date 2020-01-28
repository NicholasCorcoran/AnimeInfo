import * as React from "react";
import "./App.css";
import { Card } from "./Components/AnimeCard/card";
import { searchTitle } from "./http";

interface SearchInfo {
  mal_id: number | undefined;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number | undefined;
  score: number | undefined;
  start_date: string;
  end_date: string;
  members: number | undefined;
  rated: string;
}

export const App: React.FC = () => {
  const [data, setData] = React.useState<Array<SearchInfo>>([
    {
      mal_id: undefined,
      url: "",
      image_url: "",
      title: "",
      airing: false,
      synopsis: "",
      type: "",
      episodes: 0,
      score: undefined,
      start_date: "",
      end_date: "",
      members: undefined,
      rated: ""
    }
  ]);

  React.useEffect(() => {
    searchTitle("Naruto").then(setData);
  }, []);

  return (
    <div className="App">
      <div className="card-wrapper">
        {data.map((x: SearchInfo) => (
          <Card
            image={x.image_url}
            title={x.title}
            sdate={x.start_date}
            edate={x.end_date}
            numEpisodes={x.episodes.toString()}
          />
        ))}
      </div>
    </div>
  );
};
