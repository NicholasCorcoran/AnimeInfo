import * as React from "react";
import "../../App.css";
import { List } from "./list";
import { episodeList } from "../../http";

interface EpisodeInfo {
  episode_id: number | undefined;
  title: string;
  title_japanese: string;
  title_romanji: string;
  aired: string;
  filler: boolean;
  recap: boolean;
  video_url: string;
  forum_url: string;
}

export const Episodes: React.FC = () => {
  const [data, setData] = React.useState<Array<EpisodeInfo>>([
    {
      episode_id: undefined,
      title: "",
      title_japanese: "",
      title_romanji: "",
      aired: "",
      filler: false,
      recap: false,
      video_url: "",
      forum_url: ""
    }
  ]);

  React.useEffect(() => {
    episodeList("20").then(setData);
  }, []);
  return (
    <div className="App">
      <div className="card-wrapper">
        {data.map((x: EpisodeInfo) => (
          <List
            //   episode_id: string;
            //   title: string;
            //   aired: string;
            //   filler: boolean;
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
