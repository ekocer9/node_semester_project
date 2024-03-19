import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html")
export const homepagePage = renderPage(homepage)

const endpoint = readPage("./public/pages/endpoint/endpoint.html")
export const endpointPage = renderPage(endpoint)