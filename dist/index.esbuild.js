"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// test/index.ts
var test_exports = {};
__export(test_exports, {
  default: () => test_default
});
module.exports = __toCommonJS(test_exports);

// test/a.ts
var a = "a";

// test/b.ts
var b = async () => {
  return a;
};

// test/c.ts
var c = false;

// test/createConfig.ts
var createConfig_default = (config2) => {
  return {
    ...config2,
    a: {
      b: {
        c
      }
    }
  };
};

// test/index.ts
var config = createConfig_default({
  output: {
    path: "./",
    b
  }
});
var test_default = config;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
