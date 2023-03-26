export enum ValueTypes {
  string = "string",
  function = "function",
  number = "number",
  // ...
}

interface Item {
  origin: {
    name: string;
    valueTypes: ValueTypes[];
  };
  target: {
    name: string;
  };
}
