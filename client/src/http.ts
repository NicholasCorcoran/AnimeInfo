import axios from "axios";

export const searchTitle = (title: string) =>
  axios.post("/api/getAnime", { title: title }).then(x => x.data);
