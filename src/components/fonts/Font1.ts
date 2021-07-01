import { type } from "os";

export interface Element {
  elementDelay: number;
  shape: string;
  length?: number;
}

const defaultCharacter: Element[] = [{ elementDelay: 0, shape: "" }];

const charH: Element[] = [
  { elementDelay: 0.5, shape: "M 16 64 L 16 0" },
  { elementDelay: 1.0, shape: "M 48 64 L 48 0" },
  { elementDelay: 1.5, shape: "M 16 32 L 48 32" },
];

const charM: Element[] = [
  {
    elementDelay: 0.5,
    shape: "M 8 64 L 8 0 L 32 32 L 56 0 L 56 64",
    length: 213.04116821289062,
  },
];

export { defaultCharacter, charH, charM };
