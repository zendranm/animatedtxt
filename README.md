# AnimatedTXT

This [npm package](https://www.npmjs.com/package/animatedtxt) provides components and methods for convenient creation of animated texts and characters.

### Live demo:

https://codesandbox.io/s/animatedtxt-0s5259

# Installation

```
npm i animatedtxt
```

# Usage

Importing components:

```js
import { Phrase, Char } from 'animatedtxt';
```

Creating single character:

```js
<Char char='A' />
```

Grouping multiple characters into a phrase

```js
<Phrase>
	<Char char='A' />
	<Char char='B' />
	<Char char='C' />
</Phrase>
```

# Custom Char

You can also provide your custom definition of the character for the `<Char>` component:

```js
// Some custom definition
const customH: SvgChar = {
	svgViewBox: { width: 69, height: 81 },
	elements: [
		{
			elementDelay: 0.0,
			shape:
				'M 24 10 C 11 3 38 -4 33 7 C 19 36 19 56 13 65 C 1 89 -4 58 12 52 C 35 42 47 35 58 7 C 60 1 51 -4 52 11 C 53 34 37 49 40 76 C 42 92 47 44 68 58',
			length: 322.86358642578125,
		},
	],
	offsets: {
		left: [0, 0, 0, 0, 0],
		right: [0, 0, 0, 0, 0],
	},
};

// Example of usage
<Char char={customH} font='basic-thin' size={500} delay={1} />;
```

# API

## Char:

Behavior and design of a single character (not embedded into a phrase) can be modified by passing following props:

- char `<string>` - character to be rendered. Each font has its own limitations for allowed characters.
- delay? `<number>` - number of seconds by which the start of animation will be delayed. Default value: 0.
- duration? `<number>` - duration of the animation in seconds. Default value: 1.
- color? `<string>` - definition of the color of the character. Should be in format accepted by CSS standards. Default value: #000000.
- size? `<number>` - size of the character in "px" unit. Default value: 100.
- font? `<string>` - name of the font. Each font has different design of characters and may have different characters available. Default value: "basic-bold".
- cubicBezier? `<[number, number, number, number]>` - definition of a Cubic Bezier curve used for `animation-timing-function` property. If not provided then `linear` function is used.

Example:

```js
<Char
	char='A'
	delay={1.5}
	duration={0.8}
	color='#6600cc'
	size={300}
	font='basic-thin'
	cubicBezier={[0.68, 0.04, 0.45, 0.98]}
/>
```

## Phrase:

Behavior and design of characters grouped in the phrase can be modified by passing following props:

- margin? `<number>` - number of pixel "px" units between characters in a phrase. Default value: 0.
- color? `<string>` - definition of the color of the characters in a phrase. Should be in format accepted by CSS standards. Default value: #000000. Value is overwritten by the color defined in the character element.
- size? `<string>` - size of the characters in "px" unit. Default value: 100. Value overwrites size value of all children elements.
- duration? `<number>` - duration of the animation in seconds. Default value: 1. Value is overwritten by the value defined in the character element.
- font? `<string>` - name of the font. Each font has different design of characters and may have different characters available. Default value: "basic-bold". Value overwrites size value of all children elements.
- cubicBezier? `<[number, number, number, number]>` - definition of a Cubic Bezier curve used for `animation-timing-function` property. If not provided then `linear` function is used. Value is overwritten by the value defined in the character element.

Example:

```js
<Phrase
	color='#6600cc'
	margin={50}
	size={200}
	duration={1.1}
	font='basic-thin'
	cubicBezier={[0.68, 0.04, 0.45, 0.98]}
>
	<Char char='A' />
	<Char char='B' />
	...
</Phrase>
```
