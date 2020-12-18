const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require("./routes/api-routes");
const clientRoutes = require("./routes/client-routes");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(express.static('/public'));  // is this path right? 
app.use(express.static(__dirname + '/public'));   // is this path right? 

app.use("/api", apiRoutes);
app.use("/", clientRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));