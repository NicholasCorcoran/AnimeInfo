import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post("/api/getAnime", async (req, res) => {
  const info = await axios
    .get("https://api.jikan.moe/v3/search/anime?q=" + req.body.title)
    .then(x => x.data);

  info.results.length
    ? res.json(info.results)
    : res.sendStatus(404).json({ error: "results not found" });
});

app.post("/api/getEpisodes", async (req, res) => {
  const info = await axios
    .get("https://api.jikan.moe/v3/anime/" + req.body.id + "/episodes")
    .then(x => x.data);

  res.json(info);

  //   info.results.length
  //     ? res.json(info.results)
  //     : res.sendStatus(404).json({ error: "results not found" });
});

app.listen(port, () => console.log("Listening on port ", port));
