import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { B as BackButton } from "../../../chunks/BackButton.js";
import { a as authStore } from "../../../chunks/store.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.mainContainer.svelte-1d91d0u{min-height:100vh;background:#fefaef;position:relative;display:flex;flex-direction:column;padding-top:50px;width:100%;max-width:430px;margin:0 auto;background-image:url("../../assets/bakgrunnInfo.jpg");background-repeat:no-repeat;background-size:cover;position:relative}.mainContainerRectangle.svelte-1d91d0u{background-color:#fefaef;border-radius:30px 30px 0 0;height:75%;width:100%;padding:30px;position:absolute;bottom:0;overflow:scroll}.buttonContainer.svelte-1d91d0u{margin:15px}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-1d91d0u{max-width:1200px;width:100%}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `${$authStore ? `<div class="mainContainer svelte-1d91d0u"><div class="mainContainerRectangle svelte-1d91d0u"><div class="mainContainerParagraph">${slots.default ? slots.default({}) : ``}
        <div class="buttonContainer svelte-1d91d0u">${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``}`;
});
export {
  Layout as default
};
