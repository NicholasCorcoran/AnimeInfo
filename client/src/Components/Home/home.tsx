import * as React from "react";
import "../../App.css";
import { Card } from "../AnimeCard/card";
import { searchTitle } from "../../http";
import { useHistory } from "react-router";
import { SearchBar } from "../SearchBar/searchBar";

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

export const Home: React.FC = () => {
  const [data, setData] = React.useState<Array<SearchInfo>>([]);
  const [search, setSearch] = React.useState("");

  //   React.useEffect(() => {
  //     searchTitle("Naruto").then(setData);
  //   }, []);

  let history = useHistory();

  return (
    <div className="App">
      <div className="searchArea">
        <SearchBar
          name={"ShowSearch"}
          value={search}
          onChange={(e: React.ChangeEvent<any>) => setSearch(e.target.value)}
        />
        <button onClick={() => searchTitle(search).then(setData)}>
          Search
        </button>
      </div>
      <div className="card-wrapper">
        {data.map((x: SearchInfo, index: number) => (
          <Card
            click={() => {
              history.push("/episodes/" + x.mal_id);
            }}
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
