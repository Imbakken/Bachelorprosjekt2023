import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import "firebase/auth";
import "../../chunks/firebase.js";
const Authenticate_svelte_svelte_type_style_lang = "";
const css = {
  code: '.authContainer.svelte-1v1tuaf.svelte-1v1tuaf{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:24px}.logoContainer.svelte-1v1tuaf.svelte-1v1tuaf{padding:4em 0;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.logoContainer.svelte-1v1tuaf img.svelte-1v1tuaf{width:80%;height:auto}form.svelte-1v1tuaf.svelte-1v1tuaf{display:flex;flex-direction:column;gap:14px}form.svelte-1v1tuaf.svelte-1v1tuaf,.options.svelte-1v1tuaf.svelte-1v1tuaf{width:80%;margin:0 auto}form.svelte-1v1tuaf input.svelte-1v1tuaf{width:100%}form.svelte-1v1tuaf label.svelte-1v1tuaf{position:relative;border-bottom:1px solid #db7b65}form.svelte-1v1tuaf input.svelte-1v1tuaf{border:none;background:transparent;color:#db7b65;padding:7% 0}form.svelte-1v1tuaf button.svelte-1v1tuaf{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:5px;border-radius:15px;width:10em;cursor:pointer;display:grid;place-items:center;border:none}.submitBtn.svelte-1v1tuaf.svelte-1v1tuaf{display:flex;flex-direction:column;align-items:center;margin:7%}.error.svelte-1v1tuaf.svelte-1v1tuaf{color:#db7b65;font-size:0.9em;text-align:center}.options.svelte-1v1tuaf.svelte-1v1tuaf{padding:14px 0;overflow:hidden;font-size:0.9em;display:flex;flex-direction:column;align-items:center;gap:4px}.options.svelte-1v1tuaf p a.svelte-1v1tuaf{color:#db7b65;text-decoration:none}.options.svelte-1v1tuaf p a.svelte-1v1tuaf:hover{font-weight:bold}.loadingSpinner.svelte-1v1tuaf.svelte-1v1tuaf{animation:svelte-1v1tuaf-spin 1s linear infinite}@keyframes svelte-1v1tuaf-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
  map: null
};
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="authContainer svelte-1v1tuaf"><div class="logoContainer svelte-1v1tuaf"><img src="/logo/Heimat.png" alt="Heimat logo" class="svelte-1v1tuaf"></div>
  <form class="svelte-1v1tuaf">${``}
    <label class="svelte-1v1tuaf"><input type="email" placeholder="Email" class="svelte-1v1tuaf"${add_attribute("value", email, 0)}></label>
    <label class="svelte-1v1tuaf"><input type="password" placeholder="Password" class="svelte-1v1tuaf"${add_attribute("value", password, 0)}></label>

    <div class="submitBtn svelte-1v1tuaf"><button type="button" class="svelte-1v1tuaf">${`Logg inn`}</button></div></form>
  <div class="options svelte-1v1tuaf"><p><a href="/nouser" class="svelte-1v1tuaf">Har du ikke bruker?</a></p></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
