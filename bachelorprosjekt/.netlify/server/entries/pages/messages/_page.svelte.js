import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { a as auth } from "../../../chunks/firebase.js";
import { a as authStore, F as Footer } from "../../../chunks/Footer.js";
import "firebase/firestore";
import "toastify-js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h2.svelte-9t2krk.svelte-9t2krk{padding-top:30px;margin-bottom:5px;font-size:1.4em}.mainContainer.svelte-9t2krk.svelte-9t2krk{min-height:100vh;width:100%;max-width:430px;margin:0 auto;background-image:url("/backgroundapp/bakgrunnBeskjeder.jpg");background-repeat:no-repeat;background-size:cover;position:relative;padding-top:50px}.mainContainerHeader.svelte-9t2krk.svelte-9t2krk{display:flex;flex-direction:column}.mainContainerHeader.svelte-9t2krk Button.svelte-9t2krk{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;text-decoration:none;padding:1em;margin:0.5em 0;border-radius:5px;width:100%}.mainContainerContent.svelte-9t2krk.svelte-9t2krk{margin:0 auto;display:flex;flex-direction:column;align-items:center;margin-bottom:5em}.buttonContainer.svelte-9t2krk.svelte-9t2krk{display:flex;justify-content:center;margin-top:25px}.mainContainerRectangle.svelte-9t2krk.svelte-9t2krk{background-color:#fefaef;border-radius:30px 30px 0 0;height:75%;width:100%;padding:30px;position:absolute;bottom:0;overflow:scroll}.messageCard.svelte-9t2krk.svelte-9t2krk{background:#fbc9be;border-radius:15px;width:100%;margin:10px;padding:10px}.messageCardButtons.svelte-9t2krk.svelte-9t2krk{display:flex;justify-content:space-around;padding-top:15px}.messageCardButtons.svelte-9t2krk button.svelte-9t2krk{background:#fefaef;color:#695356;font-family:"Poppins", sans-serif;font-size:1em;text-decoration:none;padding:5px;margin:2px;border-radius:5px;width:10em}.messageCardItem.svelte-9t2krk.svelte-9t2krk{padding:10px;display:flex;flex-direction:column;justify-content:space-between}.error.svelte-9t2krk.svelte-9t2krk{margin:15px;font-size:0.8em}.dateContainer.svelte-9t2krk.svelte-9t2krk{display:flex;align-items:center}.larger.svelte-9t2krk.svelte-9t2krk{margin:0.5em 0;font-size:1em}.mainContainerForm.svelte-9t2krk.svelte-9t2krk{display:flex;flex-direction:column;width:100%}.mainContainerForm.svelte-9t2krk input.svelte-9t2krk,textarea.svelte-9t2krk.svelte-9t2krk{background:#fbc9be;color:#000;font-family:"Poppins", sans-serif;font-size:0.8em;border:none;border-radius:15px;display:block;padding:15px;width:100%;min-height:3.5em}.mainContainerForm.svelte-9t2krk label.svelte-9t2krk{font-size:1.2em;margin:0.5em 0}.mainContainer.svelte-9t2krk button.svelte-9t2krk,.buttonContainer.svelte-9t2krk button.svelte-9t2krk{border:none;cursor:pointer}.buttonContainer.svelte-9t2krk button.svelte-9t2krk{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:5px;border-radius:15px;width:10em;height:3em}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-9t2krk.svelte-9t2krk{max-width:1200px;width:100%}.messageCardButtons.svelte-9t2krk.svelte-9t2krk{display:flex;flex-direction:column}.messageCardItem.svelte-9t2krk.svelte-9t2krk{display:flex;flex-direction:row}.messageCardText.svelte-9t2krk.svelte-9t2krk{width:80%}}@media(min-width: 1200px) and (max-width: 1920px){.mainContainer.svelte-9t2krk.svelte-9t2krk{max-width:1920px;background-image:url("/backgrounddesktop/BackgroundDesktop3.jpg")}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let message = { title: "", description: "", author: "" };
  let messages = [];
  let inputElement;
  function canEdit(createdBy) {
    const currentUser = auth.currentUser;
    return currentUser && createdBy === currentUser.uid;
  }
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `
${$authStore ? `<div class="mainContainer svelte-9t2krk"><div class="mainContainerRectangle svelte-9t2krk"><div class="mainContainerHeader svelte-9t2krk"><h1>Beskjeder</h1>
        <button class="svelte-9t2krk"><p>Legg til en ny beskjed</p></button></div>
      <div class="mainContainerContent svelte-9t2krk">${each(messages, (message2) => {
    return `<div class="messageCard svelte-9t2krk"><div class="messageCardItem svelte-9t2krk"><div class="messageCardText svelte-9t2krk"><h3>${escape(message2.title)}</h3>
                <div class="dateContainer svelte-9t2krk"><p><strong>${escape(message2.createdAt.toDate().toLocaleString())}</strong>
                  </p></div>
                <p>Skrevet av <strong>${escape(message2.author)}</strong></p>
                <p class="larger svelte-9t2krk">${escape(message2.description)}</p></div>
              <div class="messageCardButtons svelte-9t2krk">${canEdit(message2.createdBy) ? `<button class="svelte-9t2krk"><p>Endre</p></button>
                  <button class="svelte-9t2krk"><p>Slett</p>
                  </button>` : ``}
              </div></div>
          </div>`;
  })}

        <form id="mainForm" class="mainContainerForm svelte-9t2krk"><h2 class="svelte-9t2krk">Legg til en ny beskjed</h2>
          <p>Beskjeden blir liggende ute i 2 uker.</p>
          <div class="titleContainer"><label for="title" class="titleLabel svelte-9t2krk">Tittel</label>
            <input type="text" placeholder="Tittel" class="form-control svelte-9t2krk"${add_attribute("value", message.title, 0)}${add_attribute("this", inputElement, 0)}></div>

          <div class="descriptionContainer"><label for="description" class="descriptionLabel svelte-9t2krk">Beskjed</label>
            <textarea rows="3" placeholder="Skriv din beskjed her" class="form-control svelte-9t2krk">${""}</textarea></div>

          <div class="authorContainer"><label for="author" class="authorLabel svelte-9t2krk">Skrevet av</label>
            <input type="text" placeholder="Skrevet av" class="form-control svelte-9t2krk"${add_attribute("value", message.author, 0)}${add_attribute("this", inputElement, 0)}></div>
          ${``}
          <div class="buttonContainer svelte-9t2krk"><button class="saveButton svelte-9t2krk" ${"disabled"}><span class="ms-2">${`Lagre`}</span></button>

            ${``}</div></form></div>
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
});
export {
  Page as default
};
