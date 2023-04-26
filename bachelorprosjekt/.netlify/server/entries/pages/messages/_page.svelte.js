import { c as create_ssr_component, a as subscribe, d as each, b as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { a as auth } from "../../../chunks/firebase.js";
import { a as authStore } from "../../../chunks/store.js";
import { Timestamp } from "firebase/firestore";
import "toastify-js";
import { B as BackButton } from "../../../chunks/BackButton.js";
import { D as DateIcon } from "../../../chunks/DateIcon.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-1he2tj8.svelte-1he2tj8{padding-bottom:30px}h2.svelte-1he2tj8.svelte-1he2tj8{padding:30px 0 30px 0}h3.svelte-1he2tj8.svelte-1he2tj8{font-size:1.5em}.mainContainer.svelte-1he2tj8.svelte-1he2tj8{min-height:100vh;width:100%;max-width:430px;margin:0 auto;background-image:url("../../assets/bakgrunnBeskjeder.jpg");background-repeat:no-repeat;background-size:cover;position:relative;padding-top:50px}.mainContainerContent.svelte-1he2tj8.svelte-1he2tj8{margin:0 auto;display:flex;flex-direction:column;align-items:center}.buttonContainer.svelte-1he2tj8.svelte-1he2tj8{display:flex;justify-content:center;margin-top:25px}.mainContainerRectangle.svelte-1he2tj8.svelte-1he2tj8{background-color:#fefaef;border-radius:30px 30px 0 0;height:75%;width:100%;padding:30px;position:absolute;bottom:0;overflow:scroll}.messageCard.svelte-1he2tj8.svelte-1he2tj8{background:#fbc9be;border-radius:15px;width:100%;margin:10px;padding:10px}.messageCardButtons.svelte-1he2tj8.svelte-1he2tj8{display:flex;justify-content:space-around;padding-top:15px}.messageCardButtons.svelte-1he2tj8 button.svelte-1he2tj8{background:#db7b65;color:#695356;font-family:"Poppins", sans-serif;font-size:1em;text-decoration:none;padding:5px;margin:2px;border-radius:5px;width:10em}.messageCardItem.svelte-1he2tj8.svelte-1he2tj8{padding:10px;display:flex;flex-direction:column;justify-content:space-between}.error.svelte-1he2tj8.svelte-1he2tj8{margin:15px;font-size:0.8em}.dateContainer.svelte-1he2tj8.svelte-1he2tj8{display:flex;align-items:center}.mainContainerForm.svelte-1he2tj8.svelte-1he2tj8{display:flex;flex-direction:column;width:100%}.mainContainerForm.svelte-1he2tj8 input.svelte-1he2tj8,textarea.svelte-1he2tj8.svelte-1he2tj8{background:#fbc9be;border:none;border-radius:15px;padding:15px;color:#000000;width:100%}.mainContainer.svelte-1he2tj8 button.svelte-1he2tj8,.buttonContainer.svelte-1he2tj8 button.svelte-1he2tj8{border:none;cursor:pointer}.buttonContainer.svelte-1he2tj8 button.svelte-1he2tj8{background:#fbc9be;color:#695356;font-family:"Poppins", sans-serif;font-size:1.2em;padding:14px 0;margin:5px;border-radius:15px;width:10em}@media(min-width: 430px) and (max-width: 1200px){.mainContainer.svelte-1he2tj8.svelte-1he2tj8{max-width:1200px;width:100%}.messageCardButtons.svelte-1he2tj8.svelte-1he2tj8{display:flex;flex-direction:column}.messageCardItem.svelte-1he2tj8.svelte-1he2tj8{display:flex;flex-direction:row}.messageCardText.svelte-1he2tj8.svelte-1he2tj8{width:80%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $authStore, $$unsubscribe_authStore;
  $$unsubscribe_authStore = subscribe(authStore, (value) => $authStore = value);
  let message = {
    title: "",
    description: "",
    date: Timestamp.fromDate(new Date()),
    author: ""
  };
  let messages = [];
  let inputElement;
  function canEdit(createdBy) {
    const currentUser = auth.currentUser;
    return currentUser && createdBy === currentUser.uid;
  }
  $$result.css.add(css);
  $$unsubscribe_authStore();
  return `
${$authStore ? `<div class="mainContainer svelte-1he2tj8"><div class="mainContainerRectangle svelte-1he2tj8"><h1 class="svelte-1he2tj8">Beskjeder</h1>
      <div class="mainContainerContent svelte-1he2tj8">${each(messages, (message2) => {
    return `<div class="messageCard svelte-1he2tj8"><div class="messageCardItem svelte-1he2tj8"><div class="messageCardText svelte-1he2tj8"><h3 class="svelte-1he2tj8">${escape(message2.title)}</h3>
                <div class="dateContainer svelte-1he2tj8">${validate_component(DateIcon, "DateIcon").$$render($$result, {}, {}, {})}
                  <p><strong>${escape(message2.date.toDate().toLocaleString())}</strong>
                  </p></div>
                <p>Skrevet av ${escape(message2.author)}</p>
                <p>${escape(message2.description)}</p></div>
              <div class="messageCardButtons svelte-1he2tj8">${canEdit(message2.createdBy) ? `<button class="svelte-1he2tj8"><p>Endre</p></button>
                  <button class="svelte-1he2tj8"><p>Slett</p>
                  </button>` : ``}
              </div></div>
          </div>`;
  })}

        <form id="mainForm" class="mainContainerForm svelte-1he2tj8"><h2 class="svelte-1he2tj8">Legg til en ny beskjed</h2>
          <div class="titleContainer"><label for="title" class="titleLabel">Tittel</label>
            <input type="text" placeholder="Tittel" class="form-control svelte-1he2tj8"${add_attribute("value", message.title, 0)}${add_attribute("this", inputElement, 0)}></div>

          <div class="descriptionContainer"><label for="description" class="descriptionLabel">Beskjed</label>
            <textarea rows="3" placeholder="Skriv din beskjed her" class="form-control svelte-1he2tj8">${""}</textarea></div>
          <div class="date"><label for="date" class="dateLabel">Dato og klokkeslett</label>
            <input type="datetime-local" placeholder="Dato og klokkeslett" class="form-control svelte-1he2tj8"${add_attribute("value", message.date, 0)}></div>
          <div class="authorContainer"><label for="author" class="authorLabel">Skrevet av</label>
            <input type="text" placeholder="Skrevet av" class="form-control svelte-1he2tj8"${add_attribute("value", message.author, 0)}></div>
          ${``}
          <div class="buttonContainer svelte-1he2tj8"><button class="saveButton svelte-1he2tj8" ${"disabled"}><span class="ms-2">${`Lagre`}</span></button>

            ${``}</div></form>
        ${validate_component(BackButton, "BackButton").$$render($$result, {}, {}, {})}</div></div></div>` : ``}`;
});
export {
  Page as default
};
