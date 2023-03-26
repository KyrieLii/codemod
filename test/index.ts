import { b } from "./b";
import createConfig from "./createConfig";

interface Config {
  output: any;
}

const config: Config = createConfig({
  output: {
    path: "./",
    b,
  },
});

export default config;
