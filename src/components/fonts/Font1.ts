import { type } from "os";

export interface Element {
  elementDelay: number;
  shape: string;
  length?: number;
}

const defaultCharacter: Element[] = [{ elementDelay: 0, shape: "" }];

const charH: Element[] = [
  { elementDelay: 0.5, shape: "m 8 64 l 0 -64" },
  { elementDelay: 1.0, shape: "m 56 64 l 0 -64" },
  { elementDelay: 1.5, shape: "m 8 32 l 56 0" },
];

const charM: Element[] = [
  {
    elementDelay: 0.5,
    shape: "m 8 64 l 0 -64 l 24 32 l 24 -32 l 0 64",
    length: 213.04116821289062,
  },
];

export { defaultCharacter, charH, charM };
