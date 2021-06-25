export interface Element {
  type: typeof options[number];
  delay: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const options = ["Line", "Circle"] as const;

const defaultCharacter: Element[] = [
  { type: "Line", delay: 0, x1: 0, y1: 0, x2: 0, y2: 0 },
];

const charH: Element[] = [
  { type: "Line", delay: 0.5, x1: 16, y1: 0, x2: 16, y2: 64 },
  { type: "Line", delay: 1.0, x1: 48, y1: 0, x2: 48, y2: 64 },
  { type: "Line", delay: 1.5, x1: 16, y1: 32, x2: 48, y2: 32 },
];

const charE: Element[] = [
  { type: "Line", delay: 0.5, x1: 20, y1: 0, x2: 20, y2: 64 },
  { type: "Line", delay: 1.0, x1: 20, y1: 8, x2: 52, y2: 8 },
  { type: "Line", delay: 1.5, x1: 20, y1: 32, x2: 44, y2: 32 },
  { type: "Line", delay: 2.0, x1: 20, y1: 56, x2: 52, y2: 56 },
];

export { defaultCharacter, charE, charH };
