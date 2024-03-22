import { homepagePage, endpointPage } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/endpoints", (req, res) => {
    res.send(endpointPage);
});

export default router;