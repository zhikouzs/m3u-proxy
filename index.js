const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Substitua com sua URL da lista M3U Plus
const M3U_URL = "https://ab2b.live/get.php?username=182843683&password=863562325&type=m3u_plus";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(M3U_URL);
    res.set("Content-Type", "application/x-mpegURL");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Erro ao carregar a lista M3U.");
  }
});

app.listen(PORT, () => {
  console.log(`Proxy M3U rodando na porta ${PORT}`);
});
