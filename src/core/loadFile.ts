import * as fs from "fs";

export default path => {
  if (!fs.existsSync(path)) return "";
  
  return fs.readFileSync(path, { encoding: "UTF-8" });
};
