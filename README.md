## Jekyll + Svelte

This is an attempt to combine Jekyll and Svelte so that we can use the best of both worlds.

## Installation

1. Clone the repository

2. Install dependencies `npm --prefix svelte i`

3. Install gems `bundle`

4. Run dev app `npm run dev`. Site will be served on ` http://127.0.0.1:4000` with live-reload

5. Build app `npm run build`

`npm run dev` will run the following commands in parallel.

- `npm run dev` on _/svelte_
- `jekyll serve` on _/_

`npm run build` will run the follwing commands in parallel.

- `npm run build` on _/svelte_
- `jekyll build` on _/_

Customize these commands in package.json based on your requirements.

## Adding Svelte components

1. Create a Svelte component say **Example.svelte** in `/svelte/src/` directory.

2. Add it to `svelte/src/main.js` as shown below

```javascript
import Example from "./Example.svelte";

const exampleDiv = document.querySelector("#example");
exampleDiv &&
  new Example({
    target: exampleDiv,
  });
```

3. Add `<div id="example"></div>` in any page where you want the `Example.svelte` component to be mounted.

4. Contribute to the project.

## Demo

[https://webjeda.com/jekyll-svelte/](https://webjeda.com/jekyll-svelte/)
