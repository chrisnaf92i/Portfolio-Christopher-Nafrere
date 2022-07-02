import Express from "express";
import { createWebsite, deleteOneWebsite, getAllWebsite, getOneWebsite } from "../controller/Website.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import website from "../model/Site.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const router = Express.Router();


router.get("/api", (_, res) => {
    res.send("Bienvenu sur l'api du Portfolio de Christopher Nafrere");
});

router.post("/api/website", createWebsite);
router.get("/api/website", getAllWebsite);
router.get("/api/website/:id", getOneWebsite);
router.delete("/api/website/:id", deleteOneWebsite);


router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../view/build/index.html"));
});

export default router;