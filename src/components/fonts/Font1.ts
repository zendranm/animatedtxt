export interface Element {
  elementDelay: number;
  shape: string;
  length: number;
}

export interface SvgChar {
  svgViewBox: { width: number; height: number };
  elements: Element[];
}

const defaultCharacter: SvgChar = {
  svgViewBox: { width: 0, height: 0 },
  elements: [{ elementDelay: 0, shape: "", length: 0 }],
};

const charA: SvgChar = {
  svgViewBox: { width: 56, height: 64 },
  elements: [
    {
      elementDelay: 0.0,
      shape: "M 7 70 L 28 0 L 49 70",
      length: 213.04116821289062,
    },
    { elementDelay: 0.5, shape: "M 8 48 L 40 48", length: 32 },
  ],
};

const charH: SvgChar = {
  svgViewBox: { width: 48, height: 64 },
  elements: [
    { elementDelay: 0.5, shape: "M 8 64 L 8 0", length: 64 },
    { elementDelay: 1.0, shape: "M 40 64 L 40 0", length: 64 },
    { elementDelay: 1.5, shape: "M 8 32 L 40 32", length: 32 },
  ],
};

const charM: SvgChar = {
  svgViewBox: { width: 64, height: 64 },
  elements: [
    {
      elementDelay: 0.5,
      shape: "M 8 64 L 8 0 L 32 32 L 56 0 L 56 64",
      length: 213.04116821289062,
    },
  ],
};

export { defaultCharacter, charA, charH, charM };
