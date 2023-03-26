import { c } from "./c";

export default (config: any) => {
  return {
    ...config,
    a: {
      b: {
        c,
      },
    },
  };
};
