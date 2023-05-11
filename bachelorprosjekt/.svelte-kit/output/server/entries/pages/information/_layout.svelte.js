import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { a as authStore, F as Footer } from "../../../chunks/Footer.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.mainContainer.svelte-1ivpdjb{min-height:100vh;background:#fefaef;position:relative;display:flex;flex-direction:column;padding-top:50px;width:100%;max-width:430px;margin:0 auto;background-image:url("/backgroundapp/bakgrunnInfo.jpg");background-repeat:no-repeat;background-size:cover;position:relative}.mainContainerRectangle.svelte-1ivpdjb{background-color:#fefaef;border-radius:30px 30px 0 0;height:75%;width:100%;padding:30px;position:absolute;bottom:0;overflow:scroll}.mainContainerParagraph.svelte-1ivpdjb{margin-bottom:5em}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-1ivpdjb{max-width:1200px;width:100%}}@media(min-width: 1200px) and (max-width: 1920px){.mainContainer.svelte-1ivpdjb{max-width:1920px;background-image:url("/backgrounddesktop/BackgroundDesktop2.jpg")}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${$authStore ? `<div class="mainContainer svelte-1ivpdjb"><div class="mainContainerRectangle svelte-1ivpdjb"><div class="mainContainerParagraph svelte-1ivpdjb">${slots.default ? slots.default({}) : ``}</div>
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
});
export {
  Layout as default
};
