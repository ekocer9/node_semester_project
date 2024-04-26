// Assignment: Set up Express + Volcanoes Router

import { Router } from "express"
import db from "../database/connections.js"

const router = Router()

router.get("/api/volcanoes", async (req, res) => {
    const result = await db.all('SELECT * FROM volcanoes')
    res.send({data: result})
})

router.get("/api/volcanoes", sync (req, res) => {

    res.send({})
})

export default router;
