const { build, Loader, Plugin, BuildOptions } = require("esbuild");
const path = require("path");

const bundle = async function () {
  return await build({
    entryPoints: [path.resolve(__dirname, "../test/index.ts")],
    outfile: path.resolve(__dirname, "../dist/index.esbuild.js"),
    format: "cjs",
    platform: "node",
    bundle: true,
    target: "esnext",
  });
};

(async () => {
  const r = await bundle();
  console.log(r);
})();
