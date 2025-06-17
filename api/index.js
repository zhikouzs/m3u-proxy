const axios = require("axios");

const M3U_URL = "https://ab2b.live/get.php?username=182843683&password=863562325&type=m3u_plus";

module.exports = async (req, res) => {
  try {
    const response = await axios.get(M3U_URL);
    res.setHeader("Content-Type", "application/x-mpegURL");
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Erro ao carregar a lista M3U.");
  }
};
