import { homepagePage, endpointPage } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/endpoints", (req, res) => {
    res.send(endpointPage);
});


router.get("/page", (req, res) => {
    res.send("<div><h1>sdfdsfdsf</h1><h2>sdfdsfdsfdsfsdfsdf</h2></div>");
});


export default router;