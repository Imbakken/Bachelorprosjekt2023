import { c as create_ssr_component } from "../../chunks/index2.js";
import "../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/auth";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".mainContainer.svelte-eq3j9s{min-height:100vh;background:#fefaef;position:relative;display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="mainContainer svelte-eq3j9s">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
