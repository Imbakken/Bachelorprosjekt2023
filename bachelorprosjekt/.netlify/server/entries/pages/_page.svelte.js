import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
import "firebase/auth";
import "../../chunks/firebase.js";
const Authenticate_svelte_svelte_type_style_lang = "";
const css = {
  code: '.authContainer.svelte-4n8iw.svelte-4n8iw{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:24px;margin-bottom:5em}.logoContainer.svelte-4n8iw.svelte-4n8iw{padding:4em 0;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}.logoContainer.svelte-4n8iw img.svelte-4n8iw{width:80%;height:auto}form.svelte-4n8iw.svelte-4n8iw{display:flex;flex-direction:column;gap:14px}form.svelte-4n8iw.svelte-4n8iw,.options.svelte-4n8iw.svelte-4n8iw{width:80%;margin:0 auto}form.svelte-4n8iw input.svelte-4n8iw{width:100%}form.svelte-4n8iw label.svelte-4n8iw{position:relative;border-bottom:1px solid #db7b65}form.svelte-4n8iw input.svelte-4n8iw{border:none;background:transparent;color:#695356;padding:7% 0;font-size:1em;font-family:"Poppins", sans-serif}form.svelte-4n8iw button.svelte-4n8iw{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:5px;border-radius:15px;width:10em;cursor:pointer;display:grid;place-items:center;border:none}.submitBtn.svelte-4n8iw.svelte-4n8iw{display:flex;flex-direction:column;align-items:center;margin:7%}.error.svelte-4n8iw.svelte-4n8iw{color:#695356;font-size:1em;text-align:center}.options.svelte-4n8iw.svelte-4n8iw{padding:14px 0;overflow:hidden;font-size:1em;display:flex;flex-direction:column;align-items:center;gap:4px}.options.svelte-4n8iw p a.svelte-4n8iw{color:#695356}.options.svelte-4n8iw p a.svelte-4n8iw:hover{font-weight:bold}.loadingSpinner.svelte-4n8iw.svelte-4n8iw{animation:svelte-4n8iw-spin 1s linear infinite}@keyframes svelte-4n8iw-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@media(min-width: 1200px) and (max-width: 1920px){.logoContainer.svelte-4n8iw img.svelte-4n8iw{width:40%;height:auto}form.svelte-4n8iw.svelte-4n8iw{width:40%}}',
  map: null
};
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="authContainer svelte-4n8iw"><div class="logoContainer svelte-4n8iw"><img src="/logo/Heimat.png" alt="Heimat logo" class="svelte-4n8iw"></div>
  <form class="svelte-4n8iw">${``}
    <label class="svelte-4n8iw"><input type="email" placeholder="Email" class="svelte-4n8iw"${add_attribute("value", email, 0)}></label>
    <label class="svelte-4n8iw"><input type="password" placeholder="Password" class="svelte-4n8iw"${add_attribute("value", password, 0)}></label>

    <div class="submitBtn svelte-4n8iw"><button type="button" class="svelte-4n8iw">${`Logg inn`}</button></div></form>
  <div class="options svelte-4n8iw"><p><a href="/nouser" class="svelte-4n8iw">Har du ikke bruker?</a></p>
    <p><a href="/about" class="svelte-4n8iw">Mer om prosjektet</a></p></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
