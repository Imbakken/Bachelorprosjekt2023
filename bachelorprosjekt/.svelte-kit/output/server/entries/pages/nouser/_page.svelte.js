import { c as create_ssr_component } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.mainContainer.svelte-wmzm5c.svelte-wmzm5c{min-height:100vh;width:100%;max-width:430px;margin:0 auto;padding-top:6em;background-repeat:no-repeat;background-size:cover;background-image:url("/backgroundapp/landingPage.jpg");display:flex;flex-direction:column;overflow:scroll}.textContainer.svelte-wmzm5c.svelte-wmzm5c{width:85%;margin:0 auto;color:#695356}h1.svelte-wmzm5c.svelte-wmzm5c{font-family:"Comfortaa", cursive}.linkContainer.svelte-wmzm5c.svelte-wmzm5c{padding-top:10px}.linkContainer.svelte-wmzm5c p a.svelte-wmzm5c{color:#695356}.linkContainer.svelte-wmzm5c p a.svelte-wmzm5c:hover{font-weight:bold}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-wmzm5c.svelte-wmzm5c{max-width:1200px}}@media(min-width: 1200px) and (max-width: 1920px){.mainContainer.svelte-wmzm5c.svelte-wmzm5c{max-width:1920px}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="mainContainer svelte-wmzm5c"><div class="textContainer svelte-wmzm5c"><h1 class="svelte-wmzm5c">Har du ikke bruker?</h1>
    <p>Denne appen er kun for eksisterende brukere, som bor i en studentbolig
      tilknyttet oss. Vennligst gå inn på hjemmesiden vår for å lage en bruker.
    </p>
    <div class="linkContainer svelte-wmzm5c"><p><a href="/" class="svelte-wmzm5c">Tilbake til innlogging</a></p></div></div>
</div>`;
});
export {
  Page as default
};
