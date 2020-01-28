import * as React from "react";
import "../../App.css";
import { List } from "./list";
import { episodeList } from "../../http";

interface EpisodeInfo {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number | undefined;
  episodes_last_page: number | undefined;
  episodes: Array<any>;
}

export const Episodes: React.FC = () => {
  const [data, setData] = React.useState<EpisodeInfo>({
    request_hash: "",
    request_cached: true,
    request_cache_expiry: undefined,
    episodes_last_page: undefined,
    episodes: [
      {
        episode_id: 0,
        title: "",
        title_japanese: "",
        title_romanji: "",
        aired: "",
        filler: false,
        recap: false,
        video_url: "",
        forum_url: ""
      }
    ]
  });

  React.useEffect(() => {
    episodeList("20").then(setData);
  }, []);
  return (
    <div className="App">
      <div className="List-wrapper">
        {data.episodes.map((x: EpisodeInfo) => (
          <List
            episode_id={x.episodes}
            title={x.episodes}
            aired={x.episodes}
            filler={x.episodes}
          />
        ))}
      </div>
    </div>
  );
};
