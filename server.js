const app = require("./app");
require("dotenv").config();

const { PORT = 4400 } = process.env;
require("./mongodb/conf");

app.listen(PORT, () => {
  console.log(`Engine running on http://localhost:${PORT}`);
});
