const swc = require("@swc/core");
const fs = require("fs-extra");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "../test/index.ts"), {
  encoding: "utf8",
});

console.log(file);

swc
  .transform(file, {
    filename: "output.js",
    jsc: {
      parser: {
        syntax: "typescript",
      },
      transform: {},
    },
    module: {
      type: "commonjs",
    },
  })
  .then((output) => {
    console.log(output.code);
    fs.writeFileSync(path.join(__dirname, "t.js"), output.code, {
      encoding: "utf8",
    });
  });

// swc
//   .parse(file, {
//     syntax: "typescript",
//     comments: true,
//     target: "es2015",
//     // isModule: false,
//   })
//   .then((module) => {
//     console.log(module.type);
//     console.log(module.body);
//   });

builder();
