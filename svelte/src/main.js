import Title from "./Title.svelte";
import HelloJekyll from "./HelloJekyll.svelte";
import Sample from "./Sample.svelte";
import About from "./About.svelte";

// remove baseurl this if you are hosting the site on a domain or userpage(username.github.io)

const titleDiv = document.querySelector("#title");
titleDiv &&
  new Title({
    target: titleDiv,
    props: {
      baseUrl: "/jekyll-svelte",
    }
  });

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

