# AnimatedTXT

This npm package provides components for convenient creation of animated texts and characters.

### npm package:

https://www.npmjs.com/package/animatedtxt

### Installation:

```
npm i animatedtxt
```

# Basic usage

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

# Local development

For testing locally developed library before publishing it:

1. Create new testing project (e.g with create-react-app)
2. Modify the "local" script from the package.json so it's last part point to the root of application from the step #1.
3. In the package.json of the application from step #1 add following script:

```
"anim": "npm --prefix ~/path/to/root/of/animatedtxt/ run local && npm i animatedtxt-*.tgz && npm run start"
```

# Stack

- React
- TypeScript
- Webpack
- Babel
- Sass
