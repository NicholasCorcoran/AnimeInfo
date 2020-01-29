import * as React from "react";
import "../../App.css";
import { List } from "./list";
import { episodeList } from "../../http";

interface ShowIDProps {
  showID: string;
}

interface EpisodeDetails {
  episode_id: any;
  title: any;
  title_japanese: any;
  title_romanji: any;
  aired: any;
  filler: any;
  recap: any;
  video_url: any;
  forum_url: any;
}

export const Episodes: React.FC<ShowIDProps> = (props: ShowIDProps) => {
  const [data, setData] = React.useState<Array<EpisodeDetails>>([]);
  const [episodeNum, setEpisodeNum] = React.useState(0);

  React.useEffect(() => {
    episodeList("20").then(x => {
      console.log(x.episodes[0].filler);
      setData(x.episodes);
      setEpisodeNum(x.episodes_last_page);
    });
  }, []);
  return (
    <div className="App">
      <div className="episode-wrapper">
        {data.map((x: EpisodeDetails) => (
          <List
            episode_id={x.episode_id}
            title={x.title}
            aired={x.aired}
            filler={x.filler.toString()}
          />
        ))}
      </div>
    </div>
  );
};
