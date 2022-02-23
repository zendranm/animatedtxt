# AnimatedTXT

This npm package provides components and methods for convenient creation of animated texts and characters.

### Live demo:

https://codesandbox.io/s/animatedtxt-st03k

### npm package:

https://www.npmjs.com/package/animatedtxt

# Basic usage

### Installation:

```
npm i animatedtxt
```

Importing components:

```
import { Phrase, Char } from "animatedtxt";
```

Creating single character:

```
<Char char="A" />
```

Grouping multiple characters into a phrase:

```
<Phrase>
  <Char char="A" />
  <Char char="B" />
  <Char char="C" />
</Phrase>
```

# More features

## Single character:

Behavior and design of a single character (not embedded into a phrase) can be modified by passing following props:

- char [string] - character to be rendered. Each font has its own limitations for allowed characters.
- delay? [number] - number of seconds by which the start of animation will be delayed. Default value: 0.
- duration? [number] - duration of the animation in seconds. Default value: 1.
- color? [string] - definition of the color of the character. Should be in format accepted by CSS standards. Default value: #000000.
- size? [number] - size of the character in "px" unit. Default value: 100.
- font? [string] - name of the font. Each font has different design of characters and may have different characters available. Currently only one font is available - "font1". Default value: "font1".

Example:

```
<Char char="A" delay={1.5} duration={0.8} color="#6600cc" size={300} font="font1"/>
```

## Phrase - grouped characters:

Behavior and design of characters grouped in the phrase can be modified by passing following props:

- margin? [number] - number of pixel "px" units between characters in a phrase. Default value: 0.
- color? [string] - definition of the color of the characters in a phrase. Should be in format accepted by CSS standards. Default value: #000000. Value is overwritten by the color defined in the character element.
- size? [string] - size of the characters in "px" unit. Default value: 100. Value overwrites size value of all children elements.
- duration? [number] - duration of the animation in seconds. Default value: 1. Value is overwritten by the value defined in the character element.
- font? [string] - name of the font. Each font has different design of characters and may have different characters available. Currently only one font is available - "font1". Default value: "font1". Value overwrites size value of all children elements.

Example:

```
<Phrase color="#6600cc" margin={50} size={200} duration={1.1} font="font1">
  <Char char="A" />
  <Char char="B" />
  ...
</Phrase>
```
