import express from "express";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}))

import matchesRouter from "./routers/matchesRouter.js";
app.use(matchesRouter);
import pagesRouter from "./routers/pagesRouter.js";
app.use(pagesRouter);
import contactRouter from "./router/contactRouter.js"
app.use(contactRouter)




const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));