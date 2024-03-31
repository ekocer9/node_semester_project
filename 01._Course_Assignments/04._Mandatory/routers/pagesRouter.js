import { homepagePage, endpointPage, gitPage } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/endpoints", (req, res) => {
    res.send(endpointPage);
});

router.get("/git", (req, res) => {
    res.send(gitPage);
});

export default router;