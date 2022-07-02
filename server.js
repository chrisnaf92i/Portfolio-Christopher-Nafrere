import Express from "express";
import Dotenv from "dotenv";
import router from "./Routes/Router.js"
import mongoose from "mongoose";
Dotenv.config();

const PORT = process.env.PORT || 8000;

const app = Express(); 

// 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// connexion a la base de donnée

mongoose.connect(process.env.MONGOOSE,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// permission de transaction avec fichier json
app.use(Express.json());

app.use(Express.static("view/build"));

app.use(router);

app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT}`));