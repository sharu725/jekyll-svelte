import HelloJekyll from "./HelloJekyll.svelte";
import Sample from "./Sample.svelte";
import About from "./About.svelte";

const helloDiv = document.querySelector("#hello");
if (helloDiv) {
  new HelloJekyll({
    target: helloDiv,
  });
}

const sampleDiv = document.querySelector("#sample");
if (sampleDiv) {
  new Sample({
    target: sampleDiv,
  });
}

const aboutDiv = document.querySelector("#about");
if (aboutDiv) {
  new About({
    target: aboutDiv,
  })
}
