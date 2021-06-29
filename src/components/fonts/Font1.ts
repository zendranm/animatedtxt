export interface Element {
  type: typeof options[number];
  elementDelay: number;
  shape: { x1: number; y1: number; x2: number; y2: number } | string;
}

const options = ["Line", "Circle", "Path"] as const;

const defaultCharacter: Element[] = [
  { type: "Line", elementDelay: 0, shape: { x1: 0, y1: 0, x2: 0, y2: 0 } },
];

const charA: Element[] = [
  { type: "Line", elementDelay: 0.5, shape: { x1: 32, y1: 0, x2: 16, y2: 84 } },
  { type: "Line", elementDelay: 1.0, shape: { x1: 32, y1: 0, x2: 48, y2: 84 } },
  {
    type: "Line",
    elementDelay: 1.5,
    shape: { x1: 16, y1: 32, x2: 48, y2: 32 },
  },
];

const charE: Element[] = [
  { type: "Line", elementDelay: 0.5, shape: { x1: 20, y1: 0, x2: 20, y2: 64 } },
  { type: "Line", elementDelay: 1.0, shape: { x1: 20, y1: 8, x2: 52, y2: 8 } },
  {
    type: "Line",
    elementDelay: 1.5,
    shape: { x1: 20, y1: 32, x2: 44, y2: 32 },
  },
  {
    type: "Line",
    elementDelay: 2.0,
    shape: { x1: 20, y1: 56, x2: 52, y2: 56 },
  },
];

const charH: Element[] = [
  { type: "Line", elementDelay: 0.5, shape: { x1: 16, y1: 0, x2: 16, y2: 64 } },
  { type: "Line", elementDelay: 1.0, shape: { x1: 48, y1: 0, x2: 48, y2: 64 } },
  {
    type: "Line",
    elementDelay: 1.5,
    shape: { x1: 16, y1: 32, x2: 48, y2: 32 },
  },
];

const charM: Element[] = [
  {
    type: "Line",
    elementDelay: 0.5,
    shape: "m 4 64 l 0 -64 l 28 32 l 28 -32 l 0 64",
  },
];

export { defaultCharacter, charA, charE, charH, charM };
