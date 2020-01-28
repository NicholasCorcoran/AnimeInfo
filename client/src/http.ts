import axios from "axios";

export const searchTitle = (title: string) =>
  axios.post("/api/getAnime", { title: title }).then(x => x.data);

export const episodeList = (id: string) =>
  axios.post("/api/getEpisodes", { id: id }).then(x => x.data);
