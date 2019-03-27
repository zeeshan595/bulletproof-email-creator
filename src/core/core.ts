import * as fs from "fs";
import Document from "./document";
const minify = require("html-minifier").minify;

export default {
  BuildEmail: (document: Document) => {
    fs.writeFileSync("build/index.html", minify(document.toString()));
  }
};
