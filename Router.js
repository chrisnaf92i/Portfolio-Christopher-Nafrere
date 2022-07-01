import Express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const router = Express.Router();


router.get("/api", (_, res) => {
    res.send("Bienvenu sur l'api du Portfolio de Christopher Nafrere");
});

router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/build/index.html"));
});

export default router;