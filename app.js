const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();
app.get("/", (request, response) => {
  const results = addDays(new Date(), 100);
  console.log(results);
  const month = results.getMonth() + 1;
  response.send(`${results.getDate()}/${month}/${results.getFullYear()}`);
  console.log(`${results.getDate()}/${month}/${results.getFullYear()}`);
});

module.exports = app;
app.listen(3000);
