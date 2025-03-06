import fs from "fs";
import path from "path";

function renameJsToCjs(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      renameJsToCjs(fullPath);
    } else if (file.endsWith(".js")) {
      fs.renameSync(fullPath, fullPath.replace(/\.js$/, ".cjs"));
    }
  });
}

renameJsToCjs("dist/cjs");
console.log("Renamed .js files to .cjs in dist/");
