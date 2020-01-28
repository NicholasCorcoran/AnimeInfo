import * as React from "react";
import "./App.css";
import { Card } from "./Components/AnimeCard/card";
import { searchTitle } from "./http";

searchTitle("Naruto").then(x => console.log(x[0]));
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
        <Card
          image={data[0].image_url}
          title={data[0].title}
          sdate={data[0].start_date}
          edate={data[0].end_date}
          numEpisodes={data[0].episodes.toString()}
        />
        <Card
          image={data[0].image_url}
          title={data[0].title}
          sdate={data[0].start_date}
          edate={data[0].end_date}
          numEpisodes={data[0].episodes.toString()}
        />
      </div>
    </div>
  );
};
