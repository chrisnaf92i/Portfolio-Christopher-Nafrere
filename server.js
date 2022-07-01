import Express from "express";
import Dotenv from "dotenv";
import router from "./Router.js"
import mongoose from "mongoose";
Dotenv.config();

const PORT = process.env.PORT || 8000;

const app = Express();

mongoose.connect(process.env.MONGOOSE,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(Express.json());

app.use(Express.static("view/build"))

app.use(router);

app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT}`));