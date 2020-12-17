## Jekyll + Svelte

This is an attempt to combine Jekyll and Svelte so that we can use the best of both worlds.

## Installation

1. Clone the repository

2. Install dependencies `npm --prefix svelte i`

3. Run dev app `npm run dev`

4. Build app `npm run build`

`npm run dev` will run the following commands in parallel.

- `npm run dev` on **/svelte**
- `jekyll serve` on **/**

`npm run build` will run the follwing commands in parallel.

- `npm run build` on **/svelte**
- `jekyll build` on **/**

Customize these commands in package.json based on your requirements.

## Adding Svelte components

1. Create a Svelte component say **Example.svelte** in `/svelte/src/` directory.

2. Add it to `svelte/src/main.js` as shown below

```javascript
import Example from './Example.svelte';

const exampleDiv = document.querySelector("#example");
if (exampleDiv) {
  const about = new Example({
    target: exampleDiv,
  });
}
```

3. Add `<div id="#example"></div>` in any page where you want the `Example.svelte` to be shown.

4. Contribute to the project.
