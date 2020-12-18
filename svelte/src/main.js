import HelloJekyll from "./HelloJekyll.svelte";
import Sample from "./Sample.svelte";
import About from "./About.svelte";

const helloDiv = document.querySelector("#hello");
helloDiv &&
  new HelloJekyll({
    target: helloDiv,
  });

const sampleDiv = document.querySelector("#sample");
sampleDiv &&
  new Sample(sampleDiv && {
    target: sampleDiv,
  });


const aboutDiv = document.querySelector("#about");
aboutDiv &&
  new About({
    target: aboutDiv,
  })

