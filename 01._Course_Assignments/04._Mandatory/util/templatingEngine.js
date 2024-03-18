import fs from "fs"

export function readPage(path) {
    return fs.readFileSync(path).toString()
}


export function renderPage(page, config = {}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString();
    return header.replace("$TAB_TITLE$", config.tabTitle || "DogInder")
                .replace("$CSS_LINK$", config.CssLinks || "")
    + page 
    + footer;
}

